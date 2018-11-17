
document.addEventListener("DOMContentLoaded", function(event){

    let loadTestMap = {
      'baseline': 'baseline'
    }
    
    let keyMetrics = ['activeHandles', 'activeRequests', 'cpu',
    'dns99Ptile', 'dnsMedian', 'gcCpuPercent', 'gcDurUs99Ptile', 'gcDurUsMedian',
    'httpClient99Ptile', 'httpClientMedian', 'httpServer99Ptile', 'httpServerMedian',
    'loopEstimatedLag', 'loopIdlePercent',
    'heapUsed', 'rss'
  ]
    
    getData(loadTestMap, function (err, data) {
      if (err) throw error;
  
    

      
      keyMetrics.forEach(metric => {
        Object.keys(loadTestMap).forEach(test => {
          genStatGraph(test, metric, data)
        })
      })
    
    })
    
    
    function graph (options, metrics) {
      options = options || {}
    
      let container = d3.select('body')
        .append('div')
        .attr('class', 'graph')
    
      let title = container
        .append('div')
        .attr('class', 'title')
        .text(options.title)
    
      let svg = container
        .append('svg')
        .attr('width', options.width || 600)
        .attr('height', options.height || 300)
    
      let legend = container
        .append('div')
        .attr('class', 'legend')
    
      // var svg = d3.select("svg"),
      var margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = svg.attr("width") - margin.left - margin.right,
      height = svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    
      var x = d3.scaleLinear().range([0, width]),
      y = d3.scaleLinear().range([height, 0]),
      z = d3.scaleOrdinal(d3.schemeCategory10);
    
      var line = d3.line()
      .curve(d3.curveBasis)
      .x(function(d) { return x(d.step); })
      .y(function(d) { return y(d.val); });
    
    
        x.domain(d3.extent(metrics[0].values, function(d, i) { return i+1; })); // DATA????
    
        y.domain([
          d3.min(metrics, function(m) { return d3.min(m.values, function(d) { return d.val; }); }),
          d3.max(metrics, function(m) { return d3.max(m.values, function(d) { return d.val; }); })
        ]);
    
        z.domain(metrics.map(function(c) { return c.id; }));
    
        g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));
    
        g.append("g")
          .attr("class", "axis axis--y")
          .call(d3.axisLeft(y))
          // .append("text")
          // .attr("transform", "rotate(-90)")
          // .attr("y", 6)
          // .attr("dy", "0.71em")
          // .attr("fill", "#000");
    
        var metric = g.selectAll(".metric")
          .data(metrics)
          .enter().append("g")
          .attr("class", "metric");
    
        metric.append("path")
          .attr("class", "line")
          .attr("d", function(d) { return line(d.values); })
          .style("stroke", function(d) { return z(d.id); });
    
        metric.append("text")
          .datum(function(d) { return {id: d.id, value: d.values[d.values.length - 1]}; })
          .attr("transform", function(d) { 
            return "translate(" + x(d.value.step) + "," + y(d.value.val) + ")"; 
          })
          .attr("x", 3)
          .attr("dy", "0.35em")
          .style("font", "10px sans-serif")
         // .text(function(d) { return d.id; });
     
        legend.selectAll('.line')
          .data(metrics.map(m => m.id))
          .enter()
          .append('span')
          .style('color', (d) => z(d))
          .style('text-transform', 'sma')
          .text(d => d)
    
    }
    
    
    function genStatGraph (test, metric, data) {
     // `${metric}Min`, `${metric}Mean`, `${metric}`, `${metric}Max`
      let metrics = [`${metric}`].map(id => {
        return {
          id: id.toLowerCase(),
          values: data[test].map((d,idx) => {
            return {step: idx, val: d[id]}
          })
        }
      })
    
      graph({title: `${test} (run) -- ${metric}`}, metrics)
    }
    
    function compareMetricGraph (metric, data, series) {

      ['Mean'].forEach(type => {
        let metrics = ['cpu', 'gcCpuPercent'].map(metric => {
          return {
            id: metric.toLowerCase(),
            values: data.map((d, idx) => {
              return {step: idx, val: (metric === 'gcCpuPercent') ? d[metric+type] / 100 : d[metric+type]}
            })
          }
        }) 

        console.log(metrics)
        if (!type) type = 'Avg'
        graph({title: `${series}: ${metric}-${type} Compare`, width: 400}, metrics)
      })
    }
    
    function getData (mapping, cb) {
      let result = {}
      let keys = Object.keys(mapping)
      let count = 0
    
      keys.forEach(k => {
        d3.json(`data/${mapping[k]}.json`, function(err, data) {
          if (err) console.log(k, err)
          result[k] = data
          if(++count === keys.length) cb(null, result)
        })
      })
    }
    
    
    });
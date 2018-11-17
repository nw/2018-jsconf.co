/* global $ io */

$(function () {
  var socket = io()

  var chart = $('#chart').epoch({
    type: 'time.area',
    data: [ { values: [] }, { values: [] } ],
    axes: ['right', 'left', 'bottom'],
    ticks: { left: 3, right: 3 }
  })

  socket.on('status', function (data) {
    if (data.running) $('#status').removeClass('alert-dark').addClass('alert-success').text('Running!')
    else $('#status').addClass('alert-dark').removeClass('alert-success').text('Not Running')
  })

  socket.on('metrics', function (data) {
    updateChart(data)
    if (data.http_req_duration) {
      let duration = normalizeKeys(data.http_req_duration)
      Object.keys(duration).forEach(k => {
        $(`#req${k}`).text(duration[k])
      })
    }
    if (data.http_reqs) {
      console.log(data.http_reqs)
      $('#rate').text(data.http_reqs.rate.toFixed(2) + ' rps')
      $('#total').text(data.http_reqs.count + ' count')
    }
  })

  function normalizeKeys (data) {
    var obj = {}
    Object.keys(data).forEach(k => {
      let newKey = k.replace(/\(|\)/g, '').replace(/^\w/, c => c.toUpperCase())
      obj[newKey] = parseFloat(data[k].toFixed(2))
    })
    return obj
  }

  function updateChart (data) {
    chart.push([
      { time: data.ts, y: ((data.vus || {}).value || 0) },
      { time: data.ts, y: ((data.http_reqs || {}).rate || 0) }
    ])
  }
})

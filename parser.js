'use strict'

if (!process.argv[2]) { 
    console.log('Must supply relative path to log file')
    process.exit(1)
}
const fs = require('fs')
const path = require('path')
const split = require('split2')

let file = fs.createReadStream(
  path.resolve(__dirname, process.argv[2])
)

let nameFilter = 'ssr-sample'

let result = {}
let keys = ['time', 'activeHandles', 'activeRequests', 'cpu',
  'dns99Ptile', 'dnsMedian', 'gcCpuPercent', 'gcDurUs99Ptile', 'gcDurUsMedian',
  'httpClient99Ptile', 'httpClientMedian', 'httpServer99Ptile', 'httpServerMedian',
  'loopEstimatedLag', 'loopIdlePercent',
  'heapUsed', 'rss'
]

let count = 0

file
  .pipe(split(JSON.parse))
  .on('data', (d) => {
    if (d.app !== nameFilter) return
    count++
    if (!result[d.id]) init_key(d.id)
    addEntry(d.id, d)
  })
  .on('error', (e) => {
    console.error(e)
  })
  .on('end', () => {
    console.log(JSON.stringify(normalize(result).map(aggergate)))

    // fs.writeFileSync('normalized.json', JSON.stringify(normalize(result)))
  })

function addEntry (id, data) {
  keys.forEach(k => {
    result[id][keyName(k)].push(keyVal(k, data))
  })
}

function init_key (id) {
  result[id] = {}
  keys.forEach(k => {
    result[id][keyName(k)] = []
  })
}

function keyName (str) {
  let parts = str.split('=')
  return parts[parts.length - 1]
}

function keyVal (str, data) {
  let key = str.split('=')[0]
  let subkeys = key.split('.')
  
  if (subkeys.length === 1) return data[key]

  return data[subkeys[0]][subkeys[1]]
}

function normalize (data) {
    let result = {}
    Object.keys(data).forEach(id => {
      data[id].time
      .map(ts => roundDate(ts))
      .forEach((t, idx) => {
        if (!result[t]) result[t] = initSlice()
        updateSlice(result[t], data[id], idx)
      })
      // report(id, data[id].time)
    })
    
    return Object.values(result)
}

function updateSlice (aggergate, lookup, index) {
    aggergate.count++
    keys.forEach(k => {
      aggergate[k].push(lookup[k][index])
    })
  }
  
  
  function initSlice () {
    let obj = { count: 0 }
    keys.forEach(k => {
        obj[k] = [] 
    })
    return obj
  }
  
  function roundDate (ts) {
    return  Math.round( (new Date(ts)).getTime() / 1000 ) * 1000
  }

  function aggergate (entry) {
    let result = { count: entry.time.length }
    keys.forEach(k => {
        if(k === 'time') return
        let name = keyName(k)
        let set = getSet(k, entry)
        Object.assign(result, getStats(name, set))
    })
    return result
}

function getStats (name, data) {
    let obj = {}
    data.sort((a,b) => a-b)
    obj[name] = getAvg(data)
    obj[name+'Min'] = data[0]
    obj[name+'Max'] = data[data.length - 1]
    obj[name+'Mean'] = getMean(data)
    return obj
}

function getAvg (data) {
    return data.reduce((p,c) => p += parseFloat(c), 0) / data.length
}

function getMean (data) {
    let idx = data.length / 2
    if (data.length % 2) return data[Math.floor(idx)]
    return (data[idx] + data[idx-1]) / 2
}

function getSet (str, data) {
    let key = str.split('=')[0]
    let subkeys = key.split('.')
    if (subkeys.length === 1) return data[key]

    return data[subkeys[0]].map(record => {
        return record[subkeys[1]]
    })
}
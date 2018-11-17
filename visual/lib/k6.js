'use strict'

const http = require('http')
const path = require('path')
const spawn = require('child_process').spawn

module.exports = {
  host: 'localhost',
  port: '6565',
  version: 'v1',
  spawn: getK6,
  reload: reloadK6,
  kill: removeK6
}

let instance // init variable

function getK6 (file, backend) {
  removeK6()

  instance = spawn('k6', ['run', '-p', '-l', '-e', `BACKEND=${backend}`, path.resolve(__dirname, file)])
    .on('error', removeK6)
    .on('close', removeK6)
    .on('exit', removeK6)
}

function reloadK6 (err) {
  if (err) console.log("RELOAD ERRR", err)
  removeK6()
  getK6()
}

function removeK6 () {
  if (!instance) return
  instance.kill()
  instance = null
}

module.exports.pause = (cb) => {
  module.exports.patch('status', isPaused(true), (err, data) => {
    if (err) return cb(err)
    return cb(null, data)
  })
}

module.exports.resume = (cb) => {
  module.exports.patch('status', isPaused(false), (err, data) => {
    if (err) return cb(err)
    return cb(null, data)
  })
}

;['GET', 'POST', 'PATCH', 'PUT'].forEach(method => {
  module.exports[method.toLowerCase()] = (endpoint, data, cb) => {
    if (typeof data === 'function') {
      cb = data
      data = undefined
    }
    if (!instance) return cb(new Error('No Instance'))

    fetch({
      path: `/${module.exports.version}/${endpoint}`,
      method: method,
      host: module.exports.host,
      port: module.exports.port,
      header: { 'Content-Type': 'application/json' }
    }, data, cb)
  }
})

function isPaused (state) {
  return `{ "data": { "attributes": { "paused": ${state} }, "id": "default", "type": "status" } }`
}

function fetch (opt, data, cb) {
  if (typeof data === 'function') {
    cb = data
    data = null
  }

  let req = http.request(opt, (res) => {
    let payload = ''
    res.on('data', (d) => { payload += d })
    res.on('error', (e) => cb(e))
    res.on('end', () => {
      try {
        let json = JSON.parse(payload)
        cb(null, json)
      } catch (err) {
        cb(err)
      }
    })
  })

  req.on('error', (err) => cb(err))

  if (data) req.write(data)
  req.end()
}

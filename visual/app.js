'use strict'

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')

const fs = require('fs')
const server = http.Server(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 7777
const k6 = require('./lib/k6')

const NSOLID_LOCATION = process.env.NSOLID_LOCATION || 'localhost:6753'
const TESTSERVER = process.env.TEST_SERVER || 'localhost:3000'

let isRunning = false

let nsolidLog = fs.createWriteStream(path.resolve(__dirname, '..', 'logs', 'metrics.json'))
let blockedLog = fs.createWriteStream(path.resolve(__dirname, '..', 'logs', 'blocked.json'))

readMetricsStream(metrics => {
  if (!isRunning) return
  nsolidLog.write(metrics)
})

k6.spawn('load.js', TESTSERVER)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', 'views')
app.set('view engine', 'pug')

app.locals.NSOLID_CONSOLE = process.env.NSOLID_DASHBOARD || 'http://localhost:6753/processes'

app.get('/', function (req, res) {
  res.render('layout')
})

app.post('/event', function (req, res) {
  if (!isRunning) return res.send({ ok: true })
  blockedLog.write(JSON.stringify(req.body) + '\n')
  res.send({ ok: true })
})

app.get('/data', function (req, res) {
  res.send('ok')
})

app.get('/pause', function (req, res) {
  k6.pause((err, date) => {
    if (err) res.status(500).send({ ok: false, error: err })
    else res.status(200).send({ ok: true })
  })
})

app.get('/resume', function (req, res) {
  k6.resume((err, date) => {
    isRunning = true
    if (err) return res.status(500).send({ ok: false, error: err })
    else res.status(200).send({ ok: true })
  })
})

app.get('/reset', function (req, res) {
  k6.reload()
  res.send({ ok: true })
})

app.get('/stats', function (req, res) {
  k6.get('metrics', (err, metrics) => {
    if (err) res.send(err)
    else res.send(metrics)
  })
})

app.use(serveStatic(path.join(__dirname, '/public'), {
  maxAge: 0
}))

io.on('connection', function (socket) {
  //
})

setInterval(() => {
  k6.get('metrics', (err, resp) => {
    if (err) return
    io.emit('metrics', filterData(resp))
  })

  k6.get('status', (err, resp) => {
    if (err) return
    let attr = resp.data.attributes
    isRunning = (!attr.paused && attr.running)
    io.emit('status', { running: (!attr.paused && attr.running) })
  })
}, 1000)

server.listen(port, () => console.log('listening on port ' + port))

function filterData (resp) {
  return resp.data
    .filter(m => ['vus', 'http_reqs', 'http_req_duration'].includes(m.id))
    .map(m => { return { id: m.id, sample: m.attributes.sample } })
    .reduce((p, c) => {
      if (!p[c.id]) p[c.id] = c.sample
      return p
    }, { ts: parseInt(Date.now() / 1000) })
}

function readMetricsStream (cb) {
  http.get(`http://${NSOLID_LOCATION}/api/v3/metrics`, res => {
    res.on('error', err => { console.log(err) })
    res.on('data', (buffer) => {
      try {
        cb(buffer.toString('utf8'))
      } catch (e) { console.log(e) }
    })
    res.on('end', () => {})
  })
}

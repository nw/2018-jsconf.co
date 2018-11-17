'use strict'

const fs = require('fs')
const path = require('path')
const split = require('split2')

let file = fs.createReadStream(
  path.resolve(__dirname, './logs/blocked.json')
)

let count = 0
let total = 0

file
  .pipe(split(JSON.parse))
  .on('data', (d) => {
    console.log(d.blockedFor)
    total += d.blockedFor
    count++
    if(d.blockedFor > 400) console.log(d.stack)
  })
  .on('error', (e) => {
    console.error(e)
  })
  .on('end', () => {
     console.log('Total Event Loop Blocks (200ms): ', count)
     console.log("Total Blocked Time: ", total)
  })

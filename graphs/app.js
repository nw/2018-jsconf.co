'use strict'

const path = require('path')
const express = require('express')
const app = express()
const port = 2222

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/basic', (req, res) => {
    res.render('layout')
})

app.get('/auto', (req, res) => {
    res.render('layout-auto')
})

app.use(express.static('public'))

app.listen(port)
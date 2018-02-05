const express = require('express')
const bodyParser = require('body-parser')

const users = require('./routes/users')

const server = express()

const path = require('path')

// Middleware
server.use(bodyParser.json())

// Routes
server.use('/users', users)

server.use(express.static(path.join(__dirname, './public')))

module.exports = server


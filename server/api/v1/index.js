const express = require('express')
const echoController = require('./echo')

const v1router = express.Router()

v1router.use('/echo', echoController)

module.exports = v1router

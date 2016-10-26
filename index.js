'use strict'

var path = require('path')
var liveServer = require('live-server')
liveServer.start({
  port: 9000,
  root: path.join(__dirname, 'docs'),
  wait: 500
})

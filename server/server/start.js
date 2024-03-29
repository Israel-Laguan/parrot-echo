'use strict'
const http = require('http')
const logger = require('../util/logger')
const { version, description } = require('../package.json')

module.exports = (app) => {
  const httpPort = normalizePort(
    process.env.PORT || process.env.PORT_HTTP || 8000
  )
  http
    .createServer(app)
    .listen(httpPort)
    .on('error', onError)
    .on('listening', onListening)

  if (process.env.NODE_ENV !== 'production') {
    logger.info(`
    _/_/_/                                              _/      _/_/_/_/            _/                 
   _/    _/    _/_/_/  _/  _/_/  _/  _/_/    _/_/    _/_/_/_/  _/          _/_/_/  _/_/_/      _/_/    
  _/_/_/    _/    _/  _/_/      _/_/      _/    _/    _/      _/_/_/    _/        _/    _/  _/    _/   
 _/        _/    _/  _/        _/        _/    _/    _/      _/        _/        _/    _/  _/    _/    
_/          _/_/_/  _/        _/          _/_/        _/_/  _/_/_/_/    _/_/_/  _/    _/    _/_/       
        SERVER v${version} \n${description}
        `)
    logger.info(`App listening on http://localhost:${httpPort}/ping`)
  }

  /**
   * Normalize a port into a number, string, or false.
   */
  function normalizePort (val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
      // named pipe
      return val
    }

    if (port >= 0) {
      // port number
      return port
    }

    return false
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError (error) {
    if (error.syscall !== 'listen') {
      throw error
    }

    const port = httpPort

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        logger.error(` ${bind} requires elevated privileges`)
        process.exit(1)
      case 'EADDRINUSE':
        logger.error(`${bind} is already in use`)
        process.exit(1)
      default:
        throw error
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening () {
    const addr = this.address()
    const type = this.cert ? '(HTTPS)' : '(HTTP)'
    const bind =
      (typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`) +
      ` ${type}`
    logger.info(bind)
  }
}

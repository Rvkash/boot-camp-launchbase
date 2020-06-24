const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'njk') // setar qual é o motor de views da app, qual é a extensão dos arquivos para abrir

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen(5000, function () {
  console.log('Server online')
})

const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

// http: verbs
// get: receber RESOURCE -> algo real
// post: Criar ou salva RESOURCE COM DADOS ENVIADOS
// put: atualizar um RESOURCE
// delete: apagar UM RESOURCE

routes.get('/', function (req, res) {
  return res.redirect('/teachers')
})

routes.get('/teachers', function (req, res) { // mesmo caminho usando verbos diferentes
  return res.render('teachers/index')
})

routes.get('/teachers/create', function (req, res) {
  return res.render('teachers/create')
})

routes.get('/teachers/:id', teachers.show)

routes.get('/teachers/:id/edit', teachers.edit)

routes.post('/teachers', teachers.post) // mesmo caminho usando verbos diferentes

routes.put('/teachers', teachers.put) // mesmo caminho usando verbos diferentes

routes.get('/student', function (req, res) {
  return res.send('student')
})

module.exports = routes

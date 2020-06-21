const express = require('express')
const nunjucks = require('nunjucks')

const courses = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk') // setar qual é o motor de views da app, qual é a extensão dos arquivos para abrir

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function (req, res) {
  const about = {
    avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
    name: 'Rocketseat',
    rocket: 'Instituição educacional | RS',
    role: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo.',
    description: 'No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.',
    links: [
      { name: 'Facebook', url: 'http://fb.com/rocketseat' },
      { name: 'Instagram', url: 'http://instagram.com/rocketseat_oficial' },
      { name: 'Twitter', url: 'http://twitter.com/rocketseat' },
      { name: 'Youtube', url: 'http://youtube.com/rocketseat' }

    ]
  }

  return res.render('about', { about: about })
})

server.get('/courses', function (req, res) {
  return res.render('courses', { items: courses })
})

server.get('/courses/:id', function (req, res) {
  const id = req.params.id

  return res.render('course', { id })
})

server.listen(5001, function () {
  console.log('Server online')
})

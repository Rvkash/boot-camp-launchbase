const express = require('express')
const nunjucks = require('nunjucks')

const contents = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false
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

server.get('/contents', function (req, res) {
  return res.render('contents', { items: contents })
})

server.listen(5000, function () {
  console.log('Server online')
})

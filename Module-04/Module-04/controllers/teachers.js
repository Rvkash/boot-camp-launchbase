// post
const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')

// req.query = id=?
// req.body = corpo
// req.params = /:id/members

// show //create //edit // put

exports.index = function (req, res) {
  return res.render('teachers/index', { teachers: data.teachers })
}

exports.create = function (req, res) {
  return res.render('teachers/create')
}

exports.post = function (req, res) {
  // req.query  // req.body

  const keys = Object.keys(req.body)
  // req.body  {avatar_url: "http://avatarulr.com" "name": 123 etc...}
  for (key of keys) {
    // req.body.key == ""
    if (req.body[key] == '') {
      return res.send('Please, fill all fields ')
    }
  }

  let { avatar_url, birth, name, services, gender } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.teachers.length + 1)

  // [...] push > [{...}] - push > construindo o array do data.json

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at
  })

  // Utilizando um database direto do node fs - uma function dentro de outra
  // Stringify: transforma value em json
  // Callback function
  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send('Write file error')
    }
    return res.redirect('/teachers')
  })

  // return res.send(req.body)
}

exports.show = function (req, res) {
  const { id } = req.params // destruturação

  const foundTeacher = data.teachers.find(function (teacher) { // encontrando teacher do data // achou o array de teachers passar o teacher no momento.
    return teacher.id == id // find retorna true ou false
  })

  if (!foundTeacher) return res.send('Teacher not found') // se não encontrar o teacher

  const teacher = { // Mandando pro front
    ...foundTeacher, // Espalhando o foundteacher
    age: age(foundTeacher.birth),
    services: foundTeacher.services.split(','), // Procurando array e quebrando com a virgula .split
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
  }

  return res.render('teachers/show', { teacher })
}

exports.edit = function (req, res) {
  const { id } = req.params // destruturação

  const foundTeacher = data.teachers.find(function (teacher) {
    return id == teacher.id
  })

  if (!foundTeacher) return res.send('Teacher not found')

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth).iso
  }

  return res.render('teachers/edit', { teacher })
}

exports.put = function (req, res) {
  const { id } = req.body // destruturação
  let index = 0
  // index = 0 no array posição no momento
  const foundTeacher = data.teachers.find(function (teacher, foundIndex) {
    if (id == teacher.id) {
      index = foundIndex
      return true // encontrou o teacher
    }
  })

  if (!foundTeacher) return res.send('Teacher not found')

  const teacher = {
    ...foundTeacher,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.teachers[index] = teacher

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('Write error')

    return res.redirect(`/teachers/${id}`)
  })
}

exports.delete = function (req, res) {
  const { id } = req.body

  // estrutura de repetiçao retorna true ou false
  const filteredTeachers = data.teachers.filter(function (teacher) {
    return teacher.id != id
  })

  data.teachers = filteredTeachers

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('write file error')

    return res.redirect('/teachers')
  })
}

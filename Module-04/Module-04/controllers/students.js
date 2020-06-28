// post
const fs = require('fs')
const data = require('../data.json')
const { date } = require('../utils')

exports.index = function (req, res) {
  return res.render('students/index', { students: data.students })
}
// req.query = id=?
// req.body = corpo
// req.params = /:id/members

// show //create //post  //edit // put
exports.show = function (req, res) {
  const { id } = req.params // destruturação

  const foundStudent = data.students.find(function (student) { // encontrando Student do data // achou o array de students passar o Student no momento.
    return student.id == id // find retorna true ou false
  })

  if (!foundStudent) return res.send('Student not found') // se não encontrar o Student

  const student = { // Mandando pro front
    ...foundStudent, // Espalhando o foundStudent
    birth: date(foundStudent.birth).birthDay
  }

  return res.render('students/show', { student })
}

exports.create = function (req, res) {
  return res.render('students/create')
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

  birth = Date.parse(req.body.birth)

  let id = 1
  const lastStudent = data.students[data.students.length - 1]

  if (lastStudent) {
    id = lastStudent.id + 1
  }

  // [...] push > [{...}] - push > construindo o array do data.json

  data.students.push({
    ...req.body,
    id,
    birth
  })

  // Utilizando um database direto do node fs - uma function dentro de outra
  // Stringify: transforma value em json
  // Callback function
  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send('Write file error')
    }
    return res.redirect(`/students/${id}`)
  })

  // return res.send(req.body)
}

exports.edit = function (req, res) {
  const { id } = req.params // destruturação

  const foundStudent = data.students.find(function (student) {
    return id == student.id
  })

  if (!foundStudent) return res.send('Student not found')

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).iso
  }

  return res.render('students/edit', { student })
}

exports.put = function (req, res) {
  const { id } = req.body // destruturação
  let index = 0
  // index = 0 no array posição no momento
  const foundStudent = data.students.find(function (student, foundIndex) {
    if (id == student.id) {
      index = foundIndex
      return true // encontrou o Student
    }
  })

  if (!foundStudent) return res.send('Student not found')

  const student = {
    ...foundStudent,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.students[index] = student

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('Write error')

    return res.redirect(`/students/${id}`)
  })
}

exports.delete = function (req, res) {
  const { id } = req.body

  // estrutura de repetiçao retorna true ou false
  const filteredStudents = data.students.filter(function (student) {
    return student.id != id
  })

  data.students = filteredStudents

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('write file error')

    return res.redirect('/students')
  })
}

// post
const fs = require('fs')
const data = require('./data.json')

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
    if (err) return res.send('Write file error')
    return res.redirect('/student')
  })

  // return res.send(req.body)
}

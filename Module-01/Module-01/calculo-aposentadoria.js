const nome = 'Marcos'
const sexo = 'M'
const idade = 58
const contribuicao = 130

const contribuição = idade + contribuicao

const homemaposentar = sexo == 'M' && contribuição >= 35 && contribuicao >= 95
const mulheraposentar = sexo == 'F' && contribuição >= 30 && contribuicao >= 85

if (homemaposentar || mulheraposentar) {
  console.log(`${nome},Você pode se aposentar`)
} else {
  console.log(`${nome},Você nao pode se aposentar`)
}

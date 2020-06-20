const nome = 'Carlos'
const peso = 84
const altura = 1.88
const sexo = 'masculino'

const imc = peso / (altura 	* altura)
let message = ''

if (imc >= 30) {
	 message = `${nome} você esta acima do peso`
} else {
	 message = `${nome} você nao esta acima do peso`
}

console.log(message)

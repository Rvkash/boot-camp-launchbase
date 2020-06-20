//Funções e métodos
const ClassA = [{
		name: "Rafael",
		grade: 9
	},
	{
		name: "Mayk",
		grade: 6
	},
	{
		name: "Diego",
		grade: 2
	},
	{
		name: "josh",
		grade: 10
	}
]


const ClassB = [{
		name: "Cleiton",
		grade: 9
	},
	{
		name: "Robson",
		grade: 1
	},
	{
		name: "Fulano",
		grade: 2
	},
	{
		name: 'New student',
		grade: 2
	}
]

function calculateAverage(students) {

	for (let i = 0; i < students.length; i++) {

		let sum = 0
		sum = sum + students[i].grade
		return sum

	}

	const average = sum / students.length
	return average
}


function sendMessage(average, turma) {
	if (average > 5) {
		console.log(`${turma} Average: ${average}. Congratulations`)
	} else {
		console.log(`${turma} Average: ${average}. is not good`)
	}
}


function MarkAsFlunked(student) {
	student.flunked = false;
	if (student.grade < 5) {
		student.flunked = true;
	}
}


function sendFlunkedMessage(student) {
	if (student.flunked) {
		console.log(` Student ${student.name} flunked!`)

	}
}

function studentsflunkeds(students) {
	for (let student of students) {
		MarkAsFlunked(student)
		sendFlunkedMessage(student)

	}
}

const average1 = calculateAverage(ClassA)
const average2 = calculateAverage(ClassB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsflunkeds(ClassA)
studentsflunkeds(ClassB)




//Vetores

// const students = [
// 	{
// 	name: "Rafael",
// 	grade: 9.8
// 	},
// 	{
// 	name: "Mayk",
// 	grade: 9.8
// 	},
// 	{
// 	name: "Diego",
// 	grade: 9.8
// 	}
// ]

// 	const nameDestudents = ("Rafael", "Mayk", "Diego")

// 	console.log(students)



//Objetos

// const student01 = {
// 	name: "Rafael",
// 	grade: 9.8
//   }


// 	const student02 = {
// 		name: "Diego",
// 		grade: 2.0
// 	}

// 	const student03 = {
// 		name: "Rodrigo",
// 		grade: 3.0
// 	}

// 	console.log()

// 	const average = (student01.grade + student02.grade + student03.grade) /3


// const student01 = 'Mayk'
// const gradestudent01 = 9.8

// const student02 = 'Diego'
// const gradestudent02 = 10

// const student03 = 'Fulano'
// const gradestudent03 = 2

// const average = (gradestudent01 + gradestudent02 + gradestudent03) / 3

// //Se a average for maior que 5 parabenizar a turma 
// if(average > 5 ) {
// 	console.log(`A average foi de ${average}. Parabéns`)

// }else {
// 	//faz outra coisa
// 	console.log('a average é menor que 5')
// }


// OPERADORES LÓGICOS 
// && "E" As duas condições devem ser verdadeiras para que 
// uma condição final seja verdadeira
// || "ou" Uma das condições deve ser verdadeira
//! "Não" nega uma condição

// console.log(5== 5 &&)


// console.log( 5 == 5 && 6 == 6) //True
// console.log( 5 == 5 && 6 != 6) // False

// console.log( 5 != 5 || 6 == 6) // True
// console.log( 5 == 5 || 6 != 6) // True

// console.log(!(5 > 6 ))         // False
// console.log(!(5  6 ))         //  False
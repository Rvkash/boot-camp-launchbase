// Desafio 1-2

const empresa = {
  nome: 'Rocketseat',
  rua: 'Guilherme Gembala',
  numero: 260
}

const usuario = {
  nome: 'Rafael',
  empresa: {
    nome: 'Rocketseat'
  }
}

console.log(`o nome do usúario é ${usuario.nome} ele trabalha na ${empresa.nome}`)

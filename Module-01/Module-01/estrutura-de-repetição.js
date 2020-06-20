const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }

]

for (const usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(',')}`)
}

function checaSeUsuarioUsaCSS (usuario) {
  for (const tecnologia of usuarios.tecnologia) {
    if (tecnologia == 'CSS') return true
  }

  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuario[i])

  if (usuarioTrabalhaComCss)
    {console.log(`O usuario ${usuarios[i].nome}trabalha com Css`)}
}

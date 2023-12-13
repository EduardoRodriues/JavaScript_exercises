const numberr = Number(prompt('Fill in with a number'))
const title = document.querySelector('.number')
const div = document.querySelector('.div')

const raiz = Math.sqrt(numberr)
const baixo = Math.floor(numberr)
const cima = Math.ceil(numberr)
const decimal = numberr.toFixed(2)

title.innerHTML = `${numberr}`

div.innerHTML = `<p>Raiz Quadrada: ${raiz}</p>`+
`<p>Arredondando para baixo: ${baixo}</p>`+
`<p>${numberr} é inteiro: ${Number.isInteger(numberr)}`
`<p>Arredondando para cima: ${cima}</p>`+
`<p>Com duas casas decimais: ${decimal}</p>`




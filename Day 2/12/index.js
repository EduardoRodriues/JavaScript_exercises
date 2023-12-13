
const pontuacaoUsuario = 900
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Vip' : 'Normal'

const corUsuario = null
const corPadrao = corUsuario || 'preta'

console.log(nivelUsuario, corPadrao)




const date = new Date()
console.log(date.toString())

console.log('Day', date.getDate())
console.log('Mes', date.getMonth())
console.log('year', date.getFullYear())
console.log('Hour', date.getHours())




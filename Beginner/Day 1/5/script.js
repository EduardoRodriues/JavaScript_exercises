const name = prompt('Fill in with your full name')

const number_letters = name.length
const second_letter = name[1]
const last_letters = name.slice(-3)
const capital = name.toUpperCase()
const lower_case = name.toLowerCase()


document.body.innerHTML = `Your name is ${name}! <br />`
document.body.innerHTML += `Your name have ${number_letters} letters <br />`
document.body.innerHTML += `The second letter of your name is: ${second_letter} <br />`
document.body.innerHTML += `What's the first indice of letter A in your name?  <br />`
document.body.innerHTML += `What's the last indice of letter A in your name?  <br />`
document.body.innerHTML += `The last 3 letters of your name are: ${last_letters} <br />`
document.body.innerHTML += `Your name with capital letters: ${capital}  <br />`
document.body.innerHTML += `Your name with lower case : ${lower_case} <br />`


// let num1 = 10
// let num2 = 2.5

// console.log(num1.toFixed(2))

// console.log(num1.toString(2))

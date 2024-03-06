const div = document.querySelector('.para')
const ps = document.querySelectorAll('p')

const styless = getComputedStyle(document.body)
const back = styless.backgroundColor

for ( let p of ps) {
    p.style.backgroundColor = back
    p.style.padding = '3px'
    p.style.border = '1px solid red'
    p.style.color = '#fff'
}
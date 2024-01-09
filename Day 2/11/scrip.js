const form = document.querySelector('.action')

const preventEvent = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
}

preventEvent()

const input_weight = document.querySelector('.input-weight')
const weight = Number(input_weight)
const input_height = document.querySelector('.input-height')
const height = Number(input_height)
const btn = document.querySelector('.btn')

const IMC = (x, y) => {
    return x/y**2
}

btn.addEventListener('click', (e) => {
    console.log(IMC(weight, height))
})



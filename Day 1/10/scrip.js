const weight = document.querySelector('.input-testt')
const Height = document.querySelector('.input-test')
const div = document.querySelector('.last')
const form = document.querySelector('.action')


form.addEventListener('submit', (e) => {
    e.preventDefault()
})




function send(x, y) {
    const result = x/y**2
    return result
}

const real_result = send(weight.value, Height.value)

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    if (real_result < 18.5) {
        div.innerHTML = "You're under weight."
    } else if (real_result > 18.5 && real_result < 24.9) {
        div.innerHTML = "You're normal weight."
    } else if (real_result > 25 && real_result < 29.9) {
        div.innerHTML = "You're overweight."
   } else if (real_result > 30 && real_result < 34.9) {
        div.innerHTML = "You're grade 1 obesity."
   } else if (real_result > 35 && real_result < 39.9) {
        div.innerHTML = "You're grade 2 obesity."
   } else if (real_result > 40) {
        div.innerHTML = "You're grade 3 obesity."
   } else{
        div.innerHTML = 'Undefined'
}

    if (weight.value == 0) {
        div.innerHTML = 'Fill in weight.'
    } else if (Height.value == 0) {
        div.innerHTML = 'Fill in height.'
}
})


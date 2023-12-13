
const form = document.querySelector('.action')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const input_weight = e.target.querySelector('.weight')
    const input_height = e.target.querySelector('.height')

    const weight = Number(input_weight.value)
    const height = Number(input_height.value)

    if (!weight) {
        setResult('Invalid Weight', false)
        return
    }

    if (!height) {
        setResult('Invalid Height', false)
        return
    }

    const IMC = getIMC(weight, height)
    const nivelImc =  getNivel(imc)

    const msg = `Your IMC is ${IMC} (${nivelImc}).`
})

function getNivel(imc) {
    const nivel = ['Under Weight, Normal weight, Overweight, Grade 1 Obesity, Grade 2 Obesity, Grade 3 Obesity']

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}

function getIMC(weight, height) {
    const IMC = weight/height**2
    return IMC.toFixed(2)
}

function createP() {
    const p = document.createElement('p')
    return p
}

function setResult(msg, isValid) {
    const result = document.querySelector('.result')
    result.innerHTML = ''
    
    const p = createP()

    if (isValid) {
        p.classList.add('paragraph')
    } else {
        p.classList.add('bad')
    }


    p.innerHTML = msg
    result.appendChild(p)
}
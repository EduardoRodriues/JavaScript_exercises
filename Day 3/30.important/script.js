const input = document.querySelector('.inf')
const btn_list = document.querySelector('.btn')
const section_1 = document.querySelector('.conteiner')
const btN = document.querySelector('.btn-primary')

const criaSection = () => {
    const new_section = document.createElement('section')
    new_section.classList.add('conteiner_3')
    section_1.appendChild(new_section)
}

const criaUL = () => {
    const UL = document.createElement('ul')
    const new_section = document.querySelector('.conteiner_3')
    UL.classList.add('ul_list')
    new_section.appendChild(UL)
}

const criaLI = () => {
    const LI = document.createElement('li')
    const UL = document.querySelector('.ul_list')
    LI.classList.add('li_list')
    UL.appendChild(LI)
}

const escreveT = () => {
    const li = document.querySelector('.li_list')
    li.innerHTML = input.value
}

const addButton = () => {
    const btn = document.createElement('button')
    btn.setAttribute('class', 'btn-primary')
    btn.textContent = 'Delete'
    const li = document.querySelector('.li_list')
    li.appendChild(btn)
}

const clearInput = () => {
    input.value = ''
    input.focus()
}



btn_list.addEventListener('click', () => {
    criaSection()
    criaUL()
    criaLI()
    escreveT()
    clearInput()
    addButton()
})

document.addEventListener('click', (e) => {
    const el = e.target

    if (el.classList.contains('btn-primary')) {
        el.parentElement.remove()
    }
})

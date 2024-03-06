const elements = [
    {tag: 'p', text: 'Phrase 1'},
    {tag: 'div', text: 'Phrase 2'},
    {tag: 'footer', text: 'Phrase 3'},
    {tag: 'section', text: 'Phrase 4'}
]

const sectioN = document.querySelector('.conteiner')

//section

const sectionCreator = () => {
    const section = document.createElement('section')
    sectioN.appendChild(section)
    section.classList.add('sectionCreated')
    section.innerHTML = elements[3].text
    return
}

sectionCreator()

//div

const section_2 = document.querySelector('.sectionCreated')
const DivCreator = () => {
    const Div = document.createElement('div')
    section_2.appendChild(Div)
    Div.classList.add('div_created')
    Div.innerHTML = elements[1].text
    return
}

DivCreator()

//P

const div_created = document.querySelector('.div_created')
const pCreator = () => {
    const p = document.createElement('p')
    div_created.appendChild(p)
    p.classList.add('p-created')
    p.innerHTML = elements[0].text
}

pCreator()

//footer

const p_created = document.querySelector('.p-created')
const FooterCreator = () => {
    const footer = document.createElement('footer')
    p_created.appendChild(footer)
    footer.innerHTML = elements[2].text
}

FooterCreator()
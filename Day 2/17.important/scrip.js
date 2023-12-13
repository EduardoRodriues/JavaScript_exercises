const elements = [
    {tag: 'p', text: 'Phrase 1'},
    {tag: 'div', text: 'Phrase 2'},
    {tag: 'footer', text: 'Phrase 3'},
    {tag: 'section', text: 'Phrase 4'}
]

const sectionn = document.querySelector('.conteiner')

function createDiv() {
    const div =  document.createElement('div')
    sectionn.appendChild(div)
}

createDiv()

function creaP() {
    const p =  document.createElement('p')
    sectionn.appendChild(p)
    p.innerHTML = elements[0].text
}

creaP()

function creaFooter() {
    const footer =  document.createElement('footer')
    sectionn.appendChild(footer)
    footer.innerHTML = elements[1].text
}

creaFooter()

function createDivv() {
    const divv =  document.createElement('div')
    sectionn.appendChild(divv)
    divv.innerHTML = elements[2].text
}

createDivv()


function creaSection() {
    const section =  document.createElement('section')
    sectionn.appendChild(section)
    section.innerHTML = elements[3].text
}

creaSection()
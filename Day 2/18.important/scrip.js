const elements = [
    {tag: 'p', text: 'Phrase 1'},
    {tag: 'div', text: 'Phrase 2'},
    {tag: 'footer', text: 'Phrase 3'},
    {tag: 'section', text: 'Phrase 4'}
]

const section = document.querySelector('.conteiner')
const div = document.createElement('div')

for (let i = 0; i < elements.length; i++) {
    let { tag, text} = elements[i]
    let tagCreate = document.createElement(tag)
    tagCreate.innerText = text
    div.appendChild(tagCreate)
}

section.appendChild(div)
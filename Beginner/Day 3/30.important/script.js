const section_1 = document.querySelector('.conteiner')
const input = document.querySelector('.inf')
const btn = document.querySelector('.btn')



const sectionCreate = () => {
    const sectionAdded = document.createElement('section')
    sectionAdded.classList.add('sectionAdded')
    section_1.appendChild(sectionAdded)
    return
}

sectionCreate()


const divCreate = () => {
    const divAdded = document.createElement('div')
    divAdded.classList.add('divAdded')
    document.querySelectorAll('.sectionAdded').appendChild(divAdded)
    return
}

divCreate()
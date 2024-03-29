
axios('pessoas.json') 
    .then(reply => {
        reply.json()
        .then(json => {
            loadElements(json)
    })
})

function loadElements(json) {
    const table = document.createElement('table')

    for(let pessoas of json) {
        const tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = pessoas.nome
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td1.innerHTML = pessoas.estado
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td1.innerHTML = pessoas.salario
        tr.appendChild(td3)

        table.appendChild(tr)
    }

    const result = document.querySelector('.result')
    result.appendChild(table)
}
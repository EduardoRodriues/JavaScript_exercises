/*

const h1 = document.querySelector('.conteiner h1')

const date = new Date()

function diaDaSemamana(diaSemana) {
    let diaDaSemamana;

    switch (diaSemana) {
        case 0:
            diaDaSemamana = 'Sunday'
            return diaDaSemamana
        case 1:
            diaDaSemamana = 'Monday'
            return diaDaSemamana
        case 2:
            diaDaSemamana = 'Tuesday'
            return diaDaSemamana
        case 3:
            diaDaSemamana = 'Wednesday'
            return diaDaSemamana
        case 4:
            diaDaSemamana = 'Thursday'
            return diaDaSemamana
        case 5:
            diaDaSemamana = 'Friday'
            return diaDaSemamana
        case 6:
            diaDaSemamana = 'Saturday'
            return diaDaSemamana
        default:
            diaDaSemamana = ''
            return diaDaSemamana
    }
}


function mes(getmes) {
    let getmes;

    switch (getmes) {
        case 0:
            mes = 'January'
            return mes
        case 1:
            mes = 'Febuary'
            return mes
        case 2:
            mes = 'March'
            return mes
        case 3:
            mes = 'April'
            return mes
        case 4:
            mes = 'May'
            return mes
        case 5:
            mes = 'June'
            return mes
        case 6:
            mes = 'July'
            return mes
        case 7:
            mes = 'August'
            return mes
        case 8:
            mes = 'September'
            return mes
        case 9:
            mes = 'October'
            return mes
        case 10:
            mes = 'November'
            return mes
        case 11:
            mes = 'December'
            return mes
        default:
            mes = ''
            return mes
    }
}


*/

const h1 = document.querySelector('.conteiner h1')
const date = new Date()

const options = {
    dateStyle: 'full',
}

h1.innerHTML = date.toLocaleDateString('pt-BR', options)


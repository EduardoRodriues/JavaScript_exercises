const clock = document.querySelector('.clock')

const Start = document.querySelector('.start')
const Stop = document.querySelector('.stop')
const End = document.querySelector('.end')



const catchDate = () => {
    let data = new Date()
    
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

Start.addEventListener('click', (e) => {
    setInterval(() => {
        clock.innerHTML = catchDate()
    }, 1000)

    clock.style.color = 'black'
})

Stop.addEventListener('click', (e) => {
    clock.style.color = 'red'
})

End.addEventListener('click', (e) => {
    clock.innerHTML = '00:00:00'
    clock.style.color = 'red'
})
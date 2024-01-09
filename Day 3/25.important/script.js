const clock = document.querySelector('.clock')

const Start = document.querySelector('.start')
const Stop = document.querySelector('.stop')
const End = document.querySelector('.end')



let seconds = 0
let timer

const cacthTime = (seconds) => {
    const date = new Date(seconds * 1000) 
    
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    }, 1000)
}

const startTime = () => {
    timer = setInterval(() => {
        seconds++
        clock.innerHTML = cacthTime(seconds)
    })
}

Start.addEventListener('click', () => {
    clearInterval(timer)
    startTime()
    clock.style.color = 'black'
})

Stop.addEventListener('click', () => {
    clearInterval(timer)
    clock.style.color = 'red'
})

End.addEventListener('click', () => {
    seconds = 0
    clock.style.color = 'red'
    clock.innerHTML = '00:00:00'
})


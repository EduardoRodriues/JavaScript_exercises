const clock = document.querySelector('.clock')
const start = document.querySelector('.start')
const stoP = document.querySelector('.stop')
const end = document.querySelector('.end')
let secondss = 0
let timer;

const getTime = (seconds) => {
    const data = new Date(seconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
    }, 1000)
}

const startClock = () => {
    timer = setInterval(() => {
    secondss++
    clock.innerHTML = getTime(secondss)
    }, 1000);
}


start.addEventListener('click', (e) => {
    clearInterval(timer)
    startClock()
    clock.style.color = 'black'
})

stoP.addEventListener('click', (e) => {
    clock.style.color = 'red'
    clearInterval(timer)
})

end.addEventListener('click', (e) => {
    clock.style.color = 'red'
    clearInterval(timer)
    clock.innerHTML = '00:00:00'
    secondss = 0
})
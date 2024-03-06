/*
function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}


function waitFuck(msg, time) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}


waitFuck('Conection with BD', rand(1, 5))
    .then(() => {
        console.log('reply 1')
        return waitFuck('Searching data of Base', rand(1, 5))
    })

    .then(() => {
        console.log('reply 2')
        return waitFuck('Searching data of Base', rand(1, 5))
    })

    .then(() => {
        console.log('reply 3')
        return waitFuck('Searching data of Base', rand(1, 5))
    })

    .then((reply) => {
        console.log(reply)
        return waitFuck('Searching data of Base', rand(1, 5))
    })
    
    .then (() => {
        console.log('Data on screen')
    })

    .catch((e) => {
        console.log(e)
    })

    console.log('Before')
    */


const rand = (min, max) => {

    max *= 1000
    min *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function waitFuck(msg, time) {

    return new Promise((resolve, reject) => {


        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}


waitFuck('Connection with DB', rand(1, 3))
    .then(() =>{
        console.log('Reply 1')
        return waitFuck('Connection with DB', rand(1, 3))
    })

    .then(() => {
        console.log('Reply 2')
        return waitFuck('Connection with DB', rand(1, 3))
    })

    .then(() => {
        console.log('Reply 3')
        return waitFuck('Connection with DB', rand(1, 5))
    })

    .then(() => {
        console.log('The End')
    })

    .catch((e) => {
        console.log(e)
    })


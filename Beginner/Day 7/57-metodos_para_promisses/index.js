function rand(min,max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function waitfuck (msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Fuck')
            return
    }


    setTimeout(() => {
        resolve(msg.toUpperCase() + 'OK') 
        return

    }, time)
})
}

// Promisse.all  Promisse.race 

const promises = [
    'first value',
    waitfuck('Promisse 1', 3000),
    waitfuck('Promisse 2', 1000),
    waitfuck('Promisse 3', 2000),
    'other value'
]

Promise.all(promises)
    .then(function(value) {
        console.log(value)
    })
    .catch(function(e) {
        console.log(e)
})

const promises_2 = [
    waitfuck('Promisse 1', 3000),
    waitfuck('Promisse 2', 5000),
    waitfuck('Promisse 3', 2000),
]

Promise.race(promises_2)
    .then(function(value) {
        console.log(value)
    })
    .catch(function(e) {
        console.log(e)
})

// Promisse.resolve Promisse.reject


function download() {
    const inCache = true

    if (inCache) {
        return Promise.resolve('Page in cache')
    } else {
        return waitfuck('Page downloaded', 3000)
    }
}


download()
    .then(dataPage => {
        console.log(dataPage)
    })
    .catch(e => {
        console.log(e)
})


function download() {
    const inCache = true

    if (inCache) {
        return Promise.reject('Page in cache')
    } else {
        return waitfuck('Page downloaded', 3000)
    }
}


download()
    .then(dataPage => {
        console.log(dataPage)
    })
    .catch(e => {
        console.log(e)
    })




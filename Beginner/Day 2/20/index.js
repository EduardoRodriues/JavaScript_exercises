/*

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50

let rand = random(min, max)

while (rand !==10) {
    rand = random(min, max)
    console.log(rand)
}

*/

const randomCreate = (min,max) => {
    const random = Math.random() * (max - min) + min
    return Math.floor(random)
}

const min = 10
const max = 500

let rand = randomCreate(min, max)

while (rand !== 10) {
    rand = randomCreate(min, max)
    console.log(rand)
}
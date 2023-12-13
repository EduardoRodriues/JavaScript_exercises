const createMulti = (mutiple) => {
    return function(n) {
        return n * mutiple
    }
}

const duble = createMulti(2)
const triple = createMulti(3)
const fourple = createMulti(4)

console.log(duble(7))
console.log(triple(2))
console.log(fourple(9))

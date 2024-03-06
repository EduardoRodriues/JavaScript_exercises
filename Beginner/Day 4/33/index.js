function* generator () {
    yield 'value 1'

    yield 'value 2'

    yield 'value 3'
}

function* generator2 () {
    yield 1

    yield 2

    yield 3
}

function* generator3 () {
    yield* generator2()

    yield 4

    yield 5

    yield 6
}

const g2 = generator3()
for (let value of g2) {
    console.log(value)
}
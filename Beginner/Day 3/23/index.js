
const FizzBuzz = (x) => {
    const result = x == 0
    if (x % 3 == 0 && x % 5 == 0) return 'FizzBuzz'
    else if (x % 5 == 0) return 'Buzz'
    else if (x % 3 == 0) return 'Fizz'
    else if (typeof x !== 'number') return 'Invalid'
    return x
}

console.log(FizzBuzz(78)) 
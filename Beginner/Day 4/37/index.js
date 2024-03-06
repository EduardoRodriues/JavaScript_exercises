/*
const number = [50, 5, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27,]

const num = number.filter((valuE) => {
    return valuE > 10
})

console.log(num)
*/

const people = [
    {name: 'John', age: 32},
    {name: 'Anna', age: 14},
    {name: 'Lislei', age: 61},
    {name: 'Joanna', age: 55},
    {name: 'Matheo', age: 70},
    {name: 'Eduardo', age: 31},
    {name: 'Evelin', age: 24}
]

const names5letters = people.filter((obj) => {
    return obj.name.length > 6
})

const names50age = people.filter((obj) => {
    return obj.age > 50
})

const namesOends = people.filter((obj) => {
    return obj.name.endsWith('o')
})

console.log(names5letters)
console.log(names50age)
console.log(namesOends)
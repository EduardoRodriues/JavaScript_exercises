const number = [50, 5, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27,]

const plus = number.map((number) => {
    return number * 2
})


const people = [
    {name: 'John', age: 32},
    {name: 'Anna', age: 14},
    {name: 'Lislei', age: 61},
    {name: 'Joanna', age: 55},
    {name: 'Matheo', age: 70},
    {name: 'Eduardo', age: 31},
    {name: 'Evelin', age: 24}
]

const names = people.map((value) => {
    return value.name
})

const ages = people.map((value) => {
    return value.age
})

const withId = people.map((value, index) => {
    return
})





console.log(names)
console.log(ages)
console.log(plus)


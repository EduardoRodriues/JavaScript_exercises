const people = [
    {name: 'John', age: 32},
    {name: 'Anna', age: 14},
    {name: 'Lislei', age: 61},
    {name: 'Joanna', age: 55},
    {name: 'Matheo', age: 70},
    {name: 'Eduardo', age: 31},
    {name: 'Evelin', age: 24}
]

const Elden = people.reduce((acml, value) => {
    return acml > value ? acml : ''
})

console.log(Elden(people.age))

   
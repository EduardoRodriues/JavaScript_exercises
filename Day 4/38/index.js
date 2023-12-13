const number = [50, 5, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27,]

const dupleNumber = number.map((value) => {
    return value * 2
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

const justName = people.map((value) => {
    return value.name
})

const justAge = people.map((value) => {
    return value.age
})

const withIds = people.map((obj, index) => {
    const newobj = {...obj}
    newobj.id = index
    return newobj
})

console.log(withIds)

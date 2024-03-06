function People (name, fullName) {

    this.name = name
    this.fullName = fullName

}

const p1 = new People('Jessie', 'Margo')
const p2 = new People('Luke', 'Surt')
const p3 = new People('Mike', 'Letson')
const p4 = new People('Robin', 'Maltone')

console.log(p1.name)
console.log(p2)
console.log(p3.fullName)
console.log(p4)
console.log(p4.name, p3.fullName)
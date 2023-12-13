function People (name, fullname) {
    this.name = name
    this.fullname = fullname

    Object.freeze(this)
}

const p1 = new People('Lucas', 'Batista')
delete p1.name
const p2 = new People('Martim', 'Luthero')

console.log(p1)
console.log(p2)
function People (name, fullName) {

    const ID = 123456
    const metod = () => {}

    this.name = name
    this.fullName = fullName


    this.method = () => {
        console.log(this.name + ': fuck')
    }
}

const p1 = new People ('Lucas', 'Pau')
const p2 = new People ('Martim', 'Pau')
const p3 = new People ('Jeds', 'Pau')
const p4 = new People ('Luke', 'Pau')

console.log(p1)


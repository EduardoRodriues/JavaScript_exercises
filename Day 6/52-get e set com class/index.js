class People {
    constructor(name, fullname) {
        this.name = name
        this.fullname = fullname
    }
    
    get fullName() {
        return `${this.name} ${this.fullname}`
    }
    
    set fullName(value) {
        value = value.split(' ')
        this.name = value.shift()
        this.fullname = value.join(' ')
}
}


const p1 = new People('Carlos', 'Eduardo')
p1.fullName = 'Carlos Eduardo Rodrigues'

console.log(p1.name)
console.log(p1.fullname)
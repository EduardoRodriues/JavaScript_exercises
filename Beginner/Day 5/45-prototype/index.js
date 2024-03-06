function People (name, fullname) {
    this.name = name
    this.fullname = fullname
}

People.prototype.FullNames = function () {
    return this.name + ' ' + this.fullname
}

const p1 = new People('Eduardo', 'Rodrigues')
const p2 = new People('Luke', 'Paul')
const data = new Date()

console.log(p1)
console.log(p1)
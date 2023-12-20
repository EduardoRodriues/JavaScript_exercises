function People (name, fullname) {
    this.name = name
    this.fullname = fullname
    this.FullNames = () => {
        return 'Original: ' + this.name + ' ' + this.fullname
    }
}

People.prototype.FullNames = function () {
    return this.name + ' ' + this.fullname
}

const p1 = new People('Eduardo', 'Rodrigues')
const p2 = new People('Luke', 'Paul')
const data = new Date()
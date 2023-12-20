const objA = {
    keyA: 'A'
}

const objB = {
    keyB: 'B'
}

const objC = new Object()
objC.keyC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)







function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.descont = function (percent) {
    this.price = this.price - (this.price * (percent / 100))
}

Product.prototype.plus = function (percent) {
    this.price = this.price + (this.price * (percent / 100))
}

const p1 = new Product('Shirt', 70)

//literal

const p2 = {
    name: 'T-shirt',
    price: 30
}

Object.setPrototypeOf(p2, Product.prototype)

p2.plus(10)
function Product (name, price) {
    this.name = name
    this.price = price

    Object.defineProperty(this, 'price', {
        enumerable: true,
        value: price,
        writable: true,
        configurable: false
    })
}

Product.prototype.discount = function (percent) {
    return this.price = this.price - (this.price * (percent / 100))
}

Product.prototype.plus = function (percent) {
    return this.price = this.price + (this.price * (percent / 100))
}



function Product_2 (name, price) {
    this.name = name
    this.price = price

    Object.defineProperty(this, 'price',{
        enumerable: true,
        value: price,
        configurable: false,
        writable: true
    })
}

Product_2.prototype.discount = (percent) => {
    return this.price = this.price - (this.price * (percent/100))
}

Product_2.prototype.plus = (percent) => {
    return this.price = this.price + (this.price * (percent/100))
}
//literal

const p1 = new Product('iphone', 3000)

const p2 = {
    name: 'T-shirt',
    price: 30
}

const pro1 = new Product_2('cellphone', 2000)

Object.setPrototypeOf(p2, Product.prototype)


p1.descount(20)
console.log(p1)

p2.plus(30)
console.log(p2)
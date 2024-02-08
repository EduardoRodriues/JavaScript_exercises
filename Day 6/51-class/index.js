class People {
    constructor(name, fullname) {
        this.name = name
        this.fullname = fullname
    }

    talk() {
        console.log(`${this.name} are talking`)
    }
}

class Control {
    constructor(brand, weight) {
        this.brand = brand
        this.weight = weight
    }

    turnOn() {
        console.log('the control are ON')
    }
}

class Product {
    constructor(name, price, amount) {
        this.name = name
        this.price = price
        this.amount = amount
    }

    inStock() {
        if (this.amount === 0) return 'the product isnt'
        console.log(`${this.name} are already in stock`)
    }
}

class Gym {
    constructor(name, size) {
        this.name = name
        this.size = size
    }

    inGym() {
        console.log('The costumer is already in')
    }
}



class SuperMarket {
    constructor(name, size, price) {
        this.name = name
        this.size = size
        this.price = price
    }

    closer() {
        console.log('The super is Closed')
    }
}

const p1 = new People('marco', 'andrade')
const control = new Control('sansung', 2)
const product = new Product('cellphone', 200, 2)
const gym = new Gym('samrt', 'bigger')
const SuperMarket = new SuperMarket('Frangolandy', 'bigger', 'Low Cost')


console.log(p1)
console.log(control)
console.log(product.inStock())
console.log(gym)
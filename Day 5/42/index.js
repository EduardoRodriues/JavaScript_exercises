function Product (name, price, amount) {
    this.name = name
    this.price = price

    Object.defineProperty(this, 'amount', {
        enumerable: true,  // mostra a chave
        value: amount,   //valor
        writable: true, // O valor pode ser alterado?
        configurable: false // A chave pode ser editada?
    })

    Object.defineProperties(this, {
        name: {
            enumerable: true,  // mostra a chave
            value: amount,   //valor
            writable: true, // O valor pode ser alterado?
            configurable: false // A chave pode ser editada?
        },

        price: {
            enumerable: true,  // mostra a chave
            value: amount,   //valor
            writable: true, // O valor pode ser alterado?
            configurable: false // A chave pode ser editada?
        }
    })
}

function Product2 (price, name, amount) {
    
    this.name = name
    this.price = price

    Object.defineProperty(this, 'amount', {
        enumerable: true,
        value: amount,
        writable: true,
        configurable: false
    })
}

const p1 = new Product('T-shirt', 20, 10)
p1.amount = 500
delete p1.amount

const p2 = new Product2(20, 'CellPhone', 2)
p2.amount = 30

console.log(p2)
console.log(Object.keys(p2))
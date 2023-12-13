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

const p1 = new Product('T-shirt', 20, 10)
p1.amount = 500
delete p1.amount
console.log(p1)
console.log(Object.keys(p1))
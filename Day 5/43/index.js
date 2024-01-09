function Product (name, price, amount) {
    this.name = name
    this.price = price

    Object.defineProperty(this, 'amount', {
        enumerable: true,  // mostra a chave
        configurable: false, // A chave pode ser editada?
        get: function () {
            return amount
        },
        set: function (amount) {
            if (typeof amount !== 'number') {
                console.log('amount must be a number')
            }
        }
    })
}


const p1 = new Product('T-shirt', 20, 10)
console.log(p1)
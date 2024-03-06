function Account(agency, account, balance) {
    this.agency = agency
    this.account = account
    this.balance = balance
}

Account.prototype.withdraw = function(value) {
    if (value > this.balance) {
        console.log(`Insufficient Balance: ${this.balance}`)
        return
    }

    this.balance -= value
    this.lookbalance()
}

Account.prototype.deposit = function(value) {
    this.balance =+ value
    this.lookbalance()
}

Account.prototype.lookbalance = function() {
    console.log(`Ag/A: ${this.agency}/${this.account} | Balance: ${this.balance.toFixed(2)}`)
}
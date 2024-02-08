/*
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

function CC (agency, account, balance, limit) {
    account.call(this, account, balance, agency)
    this.limit = limit
}

CC.prototype = Object.create(Account.prototype)
CC.prototype.constructor = CC


CC.prototype.withdraw = function(value) {
    if (value > (this.balance + this.limit)) {
        console.log(`Insufficient Balance: ${this.balance}`)
        return
    }

    this.balance += value
    this.lookbalance()
}
*/




function Account(agency, account, balance) {
    this.agency = agency
    this.account = account
    this.balance = balance
}

Account.prototype.withdraw = (value) => {
    if(value > this.balance) {
        console.log('Your balance is insuficient.' + 'Your balance : ' + this.balance)
    }

    this.balance -= value
    this.lookbalance()
}

Account.prototype.Deposit = (value) => {
    this.balance =+ value
    this.lookbalance()
}

Account.prototype.lookBlance = () => {
    console.log(`your balance is ${this.balance}`)
}

function CC(agency, account, balance, limit) {

    Account.call(this, agency, account, balance)
    this.limit = limit

}

CC.prototype = Object.create(Account.prototype)
CC.prototype.constructor = CC

CC.prototype.withdraw = function(value) {
    if (value > (this.balance + this.limit)) {
        console.log(`Insufficient Balance: ${this.balance}`)
        return
    }

    this.balance += value
    this.lookbalance()
}

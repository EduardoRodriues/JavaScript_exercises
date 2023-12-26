class EletronicDispositive {
    constructor (name) {
        this.name = name
        this.turnOn = false
    }

    ON() {
        if(this.turnOn) {
            console.log(this.name + 'Already ON')
            return
        }

        this.turnOn = true
    }

    OFF() {
        if(!this.turnOn) {
            console.log(this.name + 'Already OFF')
            return
        }

        this.turnOn = false
    }
}

class SmartPhone extends EletronicDispositive {
    constructor (name, color, model) {
        super(name)

        this.color = color
        this.model = model
    }
}

class Tablet extends EletronicDispositive  {
    constructor (name, haveWifi) {
        super(name)

        this.haveWifi = haveWifi
    }

    ON() {
        console.log('ON')
    }
}

const S1 = new SmartPhone('Iphone', 'BlackPiano', 11)
console.log(S1)
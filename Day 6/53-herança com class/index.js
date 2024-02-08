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



class DomesticItems {
    constructor(name, size, color) {
        this.name = name
        this.size = size
        this.color = color
        this.isWorking = true

    }

    working() {
        if(this.isWorking) {
            console.log('working')
        }

        this.isWorking = true
    }

    working() {
        if(!this.isWorking) {
            console.log('not working')
        }

        this.isWorking = false
    }
}

class SmartTvs extends DomesticItems {
    constructor(name, model) {
        super(name)

        this.model = model
    }

    on() {
        console.log('on')
    }
}

const S1 = new SmartPhone('Iphone', 'BlackPiano', 11)
const maquinaDeLavar = new DomesticItems('maquina de lavar', 'medium', 'black')
const smart1 = new SmartTvs('smart', 2)
console.log(S1)
console.log(maquinaDeLavar)
console.log(smart1)
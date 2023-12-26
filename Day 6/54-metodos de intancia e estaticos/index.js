class RemoteController {
    constructor(tv) {
        this.tv = tv
        this.vol = 0
    }

    //intancia

    increaseVol() {
        this.vol += 1
    }

    decreaseVol() {
        this.vol -= 1
    }

    //static

    static soma(x,y) {
        console.log(this)
    }
}

const control1 = new RemoteController('LG')
RemoteController.soma()
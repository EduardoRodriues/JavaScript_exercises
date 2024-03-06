function rand(min = 0,max = 5) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function waitfuck (msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Fuck')
            return
    }


    setTimeout(() => {
        resolve(msg.toUpperCase() + ' OK') 
        return

    }, time)
})
}

/*
async function create() {
    try{
        const fase1 = await waitfuck('Fase 1', rand())
        console.log(fase1)

        const fase2 = await waitfuck('Fase 2', rand())
        console.log(fase2)

        const fase3 = await waitfuck('Fase 3', rand())
        console.log(fase3)


        console.log('End')
    } catch (e) {
        console.log(e)
    }
}

create()
*/

async function create() {
    try{
        const phase1 = await waitfuck('fase 1', rand())
        console.log(phase1)

        const phase2 = await waitfuck('fase 2', rand())
        console.log(phase2)

        const phase3 = await waitfuck('fase 3', rand())
        console.log(phase3)

        const phase4 = await waitfuck('fase 4', rand())
        console.log(phase4)
    }

    catch(e) {
        console.log(e)
    }
}

create()
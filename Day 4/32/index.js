const recursiv = (max) => {
    if (max >= 10000) return
    max++
    console.log(max)
    recursiv(max)
}

recursiv(0)
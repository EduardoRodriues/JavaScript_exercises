const recursiv = (max) => {
    if (max >= 100) return
    max++
    console.log(max)
    recursiv(max)
}

recursiv(0)
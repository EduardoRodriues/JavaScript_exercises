const conta = (operator, acumulator, ...numbers) => {
    for (let number of numbers) {
        if (operator === '+') acumulator += numbers
        if (operator === '-') acumulator -= numbers
        if (operator === '/') acumulator /= numbers
        if (operator === '*') acumulator *= numbers
    }

    console.log(acumulator)
}

conta('*', 20, 30, 6, 3)
/*const person1  = {
    name: 'jhon',
    full_name: 'Mira',
    age: 23,
}

console.log(`${person1.name} has ${person1.age} years old and your full name is ${person1
.full_name}.`)
*/

/*function lista_pessoa (name, full_name, age) {
    return{
        name,
        full_name,
        age
    }
}

const list =  lista_pessoa('Carlos', 'Eduardo', 17)
console.log(list.age)

*/

/*const market = {
    cor: 'azul',
    tem: 'caixas',
    é: 'grande'
}

console.log(`O supermercado é ${market.cor}, tem varios ${market.tem}, e é muito ${market.é}.`)
*/

function supermarket(color, size, price) {
    return{
        color,
        size,
        price
    }
}

const inf = supermarket('blue', 'small', 'lowcost')

console.log(inf.color, inf.size)
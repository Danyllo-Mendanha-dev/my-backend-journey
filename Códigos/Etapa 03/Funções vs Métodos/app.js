const name = 'Roger'

// Funções
const sayHi = () => 'Oi'

const greet = sayHi()
console.log(greet)

// Métodos
// O que diferencia o método de uma função é a forma como eu invoco ele e onde é declarado
// Para especificar um método eu uso a notação de um ponto, onde eu referencio um valor
// Métodos são funções, mas são funções que estão associadas a objetos ou tipo de dados como por exemplo strings

const nameInUpperCase = name.toUpperCase()
console.log(nameInUpperCase)
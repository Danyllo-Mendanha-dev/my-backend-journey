// Booleans (true e false) e comparações
console.log(true, false, 'true', 'false') 

// Métodos que podem retornar booleans
const email = 'KarolComK@Dandan.com.br'
const includes = email.includes('@')  // Esse método serve para retornar (true ou falso) se existe a expressão que eu quero obter dentro da String

const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('rob') // O método includes pode ser usado tanto em arrays quanto em strings

// console.log(arrayIncludes)

// Operadores de comparação
const age = 31
const name = 'danyllo'

// console.log(age == 31)
// console.log(age == 35)
// console.log(age != 31)
// console.log(age > 31)
// console.log(age < 32)
// console.log(age <= 31)
// console.log(age >= 31)

console.log(name == 'danyllo')
console.log(name == 'Danyllo')
console.log(name > 'belinha')
console.log(name > 'Danyllo') // Caracteres minúsculos são maiores que caracteres maiúsculos
console.log(name > 'Belinha')
// Valores primitivos

// let scoreOne = 50
// let scoreTwo = scoreOne 

// console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

// scoreOne = 100  // Quando eu modifico algum desses valores o outro não é afetado

// console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

// Valores de referência
let userOne = { name: 'Danyllo', age: 18}
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 19

console.log(userOne, userTwo)
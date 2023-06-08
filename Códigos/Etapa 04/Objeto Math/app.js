// Objeto Math
console.log(Math)
console.log(Math.PI) // Acessando uma propriedade
console.log(Math.E) 

const area = 7.8

console.log(Math.round(area)) // Acessando um método
// O método round converte um número decimal em um número inteiro, faz isso da forma padrão (se o decimal do número é .4 ou menos o número vai ser arredondado para baixo, já se for .5 para cima vai ser arredondado para cima, no caso é 8)

console.log(Math.floor(area))
// O método floor sempre vai arredondar um número para baixo, mesmo se a parte decimal do número que eu estiver manipulando for maior ou igual a cinco

console.log(Math.ceil(area))
// O método ceil sempre vai arredondar o número para cima, independente da parte decimal dele

console.log(Math.trunc(area))
// O método trunc vai remover o decimal do número que ele recebeu como argumento e retornar a parte inteira dele


// números aleatórios
const randomNumber = Math.random() // invocação de um método do objeto Math chamando random
// O método random sempre gera um número decimal aleatório entre 0 e 1

console.log(randomNumber)

// mas e se eu quiser gerar um número aleatório de 0 a 100
console.log(Math.round(randomNumber * 100))
// O método random retorna 0 ou 1, logo se eu quiser que seje entre 0 e 100 é só multiplicar esse valor por 100
// retorna o valor de um número arredondado para o inteiro mais proximo
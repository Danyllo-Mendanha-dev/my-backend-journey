// função tradicional

// const double = function(number){
//     return number * 2
// }

// arrow function: é uma forma mais curta e concisa para implementar funções
// Quando uma arrow function não tem um parâmetro é necessário deixar os parêntesese vazios
// Quando tiver só um parâmetro o uso dos parênteses é opcional
// Se o bloco de código da arrow function tiver só uma linha retornando um valor, eu posso remover a palavra chave return, posso eliminar as chaves e deixar a arrow function só com uma linha

/*
const double = (number) => {
    return number * 2
}
*/
// Pode ser destes dois jeitos, vai depender de quantos parâmetros eu preciso e do que eu quero retornar
// Uma default parameter não funciona na arrow function, só funciona com a abertura e fechamento dos parênteses.
// arrow function só funciona para expressões que resultam em um valor, diferente de if, switch que são só blocos de código

const double = number => number * 2






const result = double(3)
console.log(`O resultado é: ${result}`)








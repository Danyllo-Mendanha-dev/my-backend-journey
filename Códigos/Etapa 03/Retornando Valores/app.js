// Retornando valores
const double = function(number){
    return number * 2  // A função vai retornar um valor da expressão, posso retornar diretamente um valor ou armazenar esse valor dentro de uma constante e retornar a constante
} 

const result = double(3)

const showResult = function(value){
    return `O resultado é: ${value}`
}

console.log(showResult(result))
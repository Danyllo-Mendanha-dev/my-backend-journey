// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man'] // array de strings
const ages = [31, 25 , 39, 40, 25] // array de números
const randomArray = ['Parker', 'Diana', 19, 18]

heroes[2] = 'Spider-Man' // atribuindo novo valor ao array heroes


// Métodos de arrays

//console.log(heroes.length) // quantidade de itens

const joinHeroes = heroes.join('|') // O método join vai retornar uma nova string com todo os itens do array concatenados e separados por vírgula

// O join pode receber um argumento opcional, um separador

const indexOf25 = ages.indexOf(25)
// Todo valor que não existe dentro do array, é retornado -1 no método indexOf

const moreHeroes = heroes.concat(['Superman', 'Wolverine']) // Esse método pode juntar dois arrays

const pushToHeroes = heroes.push('Cyclops', 'Hulk') // O método push além de adicionar itens no array, retorna um novo item de números que o array tem agora
// Esse método altera o valor original (mutação de valores)

const popHeroes = heroes.pop() // Remove o último item do array e retorna esse item
// A expressão se tornou um container para a String Hulk e modifica o array original

console.log(heroes)
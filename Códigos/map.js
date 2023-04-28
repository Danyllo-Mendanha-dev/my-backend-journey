/*
Quando você deve usar o map:

Quando você precisa obter um novo array, com a mesma quantidade de itens do array original

{1,2,3}  {3,6,9}
*/

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => item * 2)

console.log(numbers === doubleNumbers)

console.log(numbers,doubleNumbers)

/*
A função vai ser executada para cada item deste Array
O parametro item vai armazenar 1, o parametro index vai armazenar 0 (posição do 1° item 
do array, o parametro array vai armazenar o próprio array[1,2,3])
*/
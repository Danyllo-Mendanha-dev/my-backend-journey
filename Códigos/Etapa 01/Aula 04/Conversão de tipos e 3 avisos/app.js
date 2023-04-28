//Conversão de tipos
let score = '100'

// score = Number(score) // converte string para number

// console.log(score + 1)
// console.log(typeof score) // o operador typeof verifica o tipo de um dado

const crazyConversion = Number('Maçã')
const convertedNumber = String(97)
const booleanConversion = Boolean(10)

console.log(Boolean(0))

/*
    Valores falsy:
        - false
        - 0
        - "", '',  ``
        - null
        - undefined
        - NaN
    
    Valores thuthy:
        - Qualquer valor que não é falsy
*/
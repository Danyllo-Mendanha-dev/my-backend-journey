// Argumentos, parâmetros e default parameters
//const myFunc = function(name, lastName){  // Esse name é uma variável local, só pode ser usada dentro do bloco de código da função
    //console.log(`Oi, ${name} ${lastName}!`) // A variável name criada entre os parênteses da declaração da função é chamada de parâmetro
//}

//myFunc('Danyllo', 'Silva') // Passei o valor para name , quando eu passo um valor dentre os parametros de uma função esse valor é chamado argumento

// A ordem dos argumentos deve ser igual a ordem dos parâmetros

const myFunc = function(name = 'Danylo', lastName = 'Silva'){  
    console.log(`Oi, ${name} ${lastName}!`) 
}

myFunc() 
myFunc('Delma') // Esses argumentos vão sobreescrevesr os valores que eu havia passado na expressão da função
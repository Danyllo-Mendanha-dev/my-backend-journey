// forEach e callbacks
/*
const myFunc = callback =>{
    const value = 77

    callback(value)
}


myFunc(number => {
    console.log(number)
})
*/

// O valor que um callback recebe é a declaração de uma função 
// Quando eu invocar essa função eu preciso inserir como argumento dessa invocação a declaração de uma função
// São funções que eu passo como argumento da invocação dentro de outras funções ou métodos

const socialNetworks = ['youtube', 'twitter', 'Instagram', 'Facebook']

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array) }


socialNetworks.forEach(logArrayInfo)

// O método forEach significa para cada, ou seja, para cada item desse array vai ser executada alguma ação
// O método forEach pode receber uma função da callback
// A função de calback que eu passei pode receber três parâmetros
// O primeiro parâmetro é o item atual que está sendo iterado
// O segundo parâmetro é o index do item atual (opcional)
// O terceiro parâmetro é o array que está sendo iterado (opcional)
// Obs: A declaração da função pode ser desacoplada em outra função, assim a função pode ser reutilizada em algum outro pedaço do código
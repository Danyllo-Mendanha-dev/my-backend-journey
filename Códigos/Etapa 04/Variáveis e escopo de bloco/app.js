// variáveis e escopo de bloco

let age = 31 // Quando eu crio uma variável neste local na raiz do documento, ou seja, fora do bloco de código, quer dizer que essa é uma variável de escopo global, pode ser acessada e usada em qualquer lugar desse arquivo.

if(true){
  const age = 41 // Eu posso criar uma variável de mesmo nome desde que ela, contanto que não esteja no mesmo escopo da outra, essa é uma variavel de escopo local, se eu colocar só age = 41, ela modifica a variavel de escopo global
  const name = 'Danyllo'

  console.log(`Dentro do primeiro bloco de código: ${age} ${name}`)

  if(true){    // Aí eu tenho bloco de códigos aninhados, porque tem um bloco de código dentro de outro

    const age = 51 // As mesmas regras de escopo se aplicam a uma const e uma let
    console.log(`Dentro do 2ª bloco de código:  ${age}`)
  }
}
console.log(`Fora do bloco da código: ${age}  ${name}`)
const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit', event => {
 
  event.preventDefault()

 console.log(event.target.username.value)
})
const username = '123danyllo123'
const pattern = /^[a-z]{6,}$/
//const isAMatch = pattern.test(username) // O método test vai tentar dar um match entre a regex e a string que eu especificar como argumento da invocação dele. A invocação do test sempre vai retornar um boolean, se o match acontecer exibe true, senão false. O test é um método de regex

// if(isAMatch){
//   console.log('o teste da regex passou =)')
// } else {
//   console.log('O teste da regex não passou =(')
// }

// Um dos vários métodos que eu posso usar para testar se uma expressão regular e uma string dá um match é o método search
// O search é um método de string, recebe como argumento a regex que eu quero testar

const result = username.search(pattern)

console.log(result) // toda vez que o match dentro da string não acontece o search retorna -1, ou retorna 0 porque o match do result deve estar no inicio da string
// Quando o search deve ser usado?
// Imagina que eu tenho um parágrafo e quero descobrir o index no qual um padrão de regex dá match dentro desse parágrafo,mais para testar em input de formulário na maioria das vezes vou usar o test
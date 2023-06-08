// Reagindo a interação do usuário com a página

const button = document.querySelector('button')

button.addEventListener('click', () => {
  console.log('Clicou no Botão!')
}) // Esse método vai escutar o acontecimento de algum evento nesse elemento, eu especifico o tipo de evento que eu quero escutar que é o click, existem vários tipos de eventos que eu posso escutar, a função de callback só é executada quando a execução do elemento click acontecer

// Eu posso adicionar eventListeners em cada uma das tags li, para que quando aconteça um click em uma li ela seja removida da ul e consequentemente da tela

const lis = document.querySelectorAll('li')

lis.forEach(li => {
li.addEventListener('click', event => {        // o browser disponibiliza para mim um objeto dentro do parâmetro dessa função automaticamente, esse objeto contém informações sobre o evento que aconteceu, assim eu vejo várias propriedades disponíveis, entre elas, a target que armazena a ocorrência do evento que o elemento ocorreu
  //console.log(event.target) // obtendo a referência da li que foi clicada, dou preferência para esse, porque vai me ajudar com o event delegation
  //console.log(li)// obtendo a referência da li que foi clicada

  // Vou modificar o estilo da li que foi clicada, para que ela fique com o traço horizontal no meio dela, como se estivesse sido riscada

  const clickedElement = event.target

  clickedElement.style.textDecoration = 'line-through'

})
// Esse método addEventListener recebe como primeiro parâmetro o tipo de evento que eu quero adicionar na li e como segundo parâmetro eu vou executar uma função que vai executar essa ação quando o clique acontecer
})
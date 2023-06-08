const ul = document.querySelector('ul')

//ul.remove() // removendo um elemento no DOM

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.remove()
  })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')  // O createElement é um método do document para criar um novo elemento html, o argumento desse método é o nome da tag que eu quero criar
  li.textContent = 'Novo Item'
  // Qual é a forma de inserir a tag no DOM, a primeira forma é usar o método append() no pai que esse elemento vai ter, outra forma é o método prepand também no pai que esse elemento vai ter

  //ul.append(li) // recebe como argumento o elemento que vai ser inserido, esse elemento como argumento vai ser tido como último filho no qual esse elemento foi encadeado

  ul.prepend(li) //  recebe como argumento o elemento que vai ser inserido, esse elemento como argumento vai ser tido como primeiro filho no qual esse elemento foi encadeado
})
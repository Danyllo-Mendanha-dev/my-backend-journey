const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')  
  li.textContent = 'Novo Item'
  //ul.append(li) 
  ul.prepend(li) 
})

ul.addEventListener('click', event  => {

  const clickedElement = event.target // Quando eu clicar na li, eu obtenho a referência da li que foi clicada mesmo sem ter um evento atrelado diretamente a esse elemento. Isso significa que quando eu clico em uma li, a propagação desse evento acontece e consigo ver qual li foi clicada. A propagação vai em direção a ul.
  if(clickedElement.tagName === 'LI'){
    clickedElement.remove()
  }
})

 

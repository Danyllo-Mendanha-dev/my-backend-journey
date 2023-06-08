const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 50px;')

// O método setAttribute() quando usado para adicionar estilos em um elemento, pode sobreescrever completamente o estilo que esse elemento já tinha

// Eu quero adicionar estilos sem sobreescrever o estilo anterior, para fazer isso posso usar a propriedade style

// console.log(title.style)

// Eu vejo no console, um objeto CSS, com todas as propriedades que eu posso usar nessa elemento

// Eu posso usar essa propriedade style para obter, adicionar ou remover estilos de um elemento

// Imagina que eu quero obter a propriedade color do h1

// console.log(title.style.color)

// E se eu quiser adicionar mais estilos nesse elemento


// title.style.margin = '50px'
// title.style.color = 'pink'
// title.style.fontSize = '50px'
// title.style.margin = '' // removendo um estilo, basta atribuir uma propriedade vazia, no caso removi o valor da propriedade margin

// font-size: 

// se eu escrever a propriedade dessa forma no JavaScript a engine vai pensar que font é uma variável que está sendo subtraída pela variável size, quando eu escrever propriedade CSS no JavaScript, toda vez que a propriedade tem duas ou mais palavras ao invés do hifen eu uso o camelCase, o correto seria:  fontSize

// eu coloco title.style. e o nome da propriedade que eu quero atribuir um valor
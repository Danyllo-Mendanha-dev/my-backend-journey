//  Como mudar classes

const paragraph = document.querySelector('p')

//console.log(paragraph.classList)// para exibir uma lista com as classes que esse elemento tem, uso a propriedade classList

// Tem como eu adicionar uma classe em um elemento através de um método classList chamado add()


// paragraph.classList.add('error')

// Tem como eu remover uma classe de um elemento através do método classList chamado remove()

// paragraph.classList.remove('error')

// paragraph.classList.add('success')

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
  if(paragraph.textContent.includes('error')){
    paragraph.classList.add('error')
  }
  if(paragraph.textContent.includes('success')){
    paragraph.classList.add('success')
  }
})

paragraphs.forEach(paragraph => {
  console.log(paragraph.textContent)
})
// const paragraphs = document.querySelectorAll('p')
// paragraphs.forEach(paragraph => {
//   if(paragraph.textContent.includes('error')){
//     paragraph.classList.add('error')
//   }
//   if(paragraph.textContent.includes('success')){
//     paragraph.classList.add('success')
//   }
// })

// paragraphs.forEach(paragraph => {
//   console.log(paragraph.textContent)
// })

// Tem uma outra forma de eu descobrir o texto que um documento html contém, usando a propriedade textContent

// A innerText obtém o texto visível que o elemento contém

// A textContent vai obter todo o texto que o elemento contem independente se o texto tá visivel ou não


// Alternar uma classe em um elemento, se um elemento tiver uma classe vou remover ela, se o elemento não tiver uma classe vou adicionar ela

// const title = document.querySelector('h1')

// title.classList.toggle('test') // método toggle
// title.classList.toggle('test')

// O método toggle funciona assim, quando o elemento não tem essa classe que eu especifiquei como argumento, essa classe é adicionada no elemento, mas quando o elemento já tem uma classe se eu usar o método toggle e passar o nome dessa classe como argumento, a classe anterior vai ser removida do elemento
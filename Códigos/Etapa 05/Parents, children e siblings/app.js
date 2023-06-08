const article = document.querySelector('article')

// console.log(article.children) // obtenho elementos filhos do article

// converter o HTMLCollection em um array para usar o forEach()

// console.log(Array.from(article.children)) // Essa invocação não é destrutiva, ou seja, não modifica o objeto original

// console.log(article.children)

// Adicionando uma classe CSS em cada elemento filho do article

//Array.from(article.children).forEach( element => {
  // Adicionando uma classe CSS em cada elemento do array
  //element.classList.add('article-element')
//})

// E se eu quiser descobrir quem é o pai do h2

const title = document.querySelector('h2')

//console.log(title.parentElement) // obtendo o pai do h2, ou seja, no caso é o article, é possível eu encadear outra parent element assim obtendo o pai do article

// console.log(title.parentElement.parentElement)

// Relação entre elementos irmãos, eu posso querer saber qual é o próximo elemento irmão do h2

// console.log(title.nextElementSibling)

// e se eu quiser descobriri qual é o elemento anterior ao h2

console.log(title.previousElementSibling)
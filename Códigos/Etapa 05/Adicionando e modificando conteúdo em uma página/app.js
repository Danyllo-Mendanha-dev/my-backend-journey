// const paragraph = document.querySelector('p') // obtive a referência do parágrafo

// console.log(paragraph.innerText) // usando a propriedade innerText (exibe o texto)

// paragraph.innerText += ' Texto Inserido' // mas e se eu quiser modificar o texto, faço isso

// e se eu quiser modificar o texto de múltiplos elementos inseridos de uma só vez

///const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph, index) => {
  //console.log(paragraph.innerText) // exibe o texto de cada parágrafo

  // mas e se eu quiser modificar o texto de cada parágrafo, eu posso atribuir uma string para a propriedade innerText

//   paragraph.innerText += ` Novo Texto ${index + 1}`
//   console.log(paragraph.innerText)
// })

// const div = document.querySelector('.content')       // modificando o documento html

//console.log(div.innerHTML) // Exibe no console o html que a div tem dentro dela

//div.innerHTML = `<h2>Novo h2</h2>`    // e se eu quiser modificar o html

// se já houver algum elemento html dentro do div, o elemento que eu tô atribuindo vai sobreescrever o elemento anterior e se o elemento html não tiver conteúdo ele vai preencher o espaço vazio com o novo valor que foi atribuido

//const people = ['Jhonathan', 'Keythison', 'Marcio'] // banco de dados de pessoas (fingir)

// people.forEach(person => {
//   div.innerHTML += `<p>${person}</p>`   // a cada iteração vai ser adicionado na página html o nome da pessoa
// })

// innerText e innerHTML são tanto getters quanto setters

// getters e setters

// get significa obter

// set significa estabelecer

const link = document.querySelector('a')

// console.log(link.getAttribute('href')) // obtendo o valor do href, através do método getAttribute()

// Eu posso inserir dentro da invocação desse método uma string com o nome do atributo no qual eu quero obter o valor

// se eu quiser modificar ou setar o valor de um atributo

// link.setAttribute('href', 'https://github.com/Danyllo-Mendanha-dev')

// A invocação desse método recebe dois argumentos, o primeiro é o nome do atributo que eu quero modificar, o segundo é o valor que eu quero inserir nesse atributo

// se eu quisse modificar o texto desse link

// link.innerText = 'GitHub do Danyllo Mendanha'

const paragraph = document.querySelector('p')

// console.log(paragraph.getAttribute('class'))

// como eu modifico o valor desse atributo

// paragraph.setAttribute('class', 'success')

// e se eu quiser setar o valor de um atributo que ainda não existe no elemento

// paragraph.setAttribute('style', 'color: green;')

// não importa se o atributo não existe no elemento, porque se não existir o JavaScript vai criar esse atributo e vai fazer ele receber o valor que eu especifiquei
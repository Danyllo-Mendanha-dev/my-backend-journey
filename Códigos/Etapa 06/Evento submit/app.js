const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit', event => {
  // o método event preventDefault, serve para evitar o carregamento da página sem que nada seja inserido, por isso vou usar o event
  event.preventDefault()

 // console.log(username.value) // obtém os valores que o input armazena
 //console.log(form.username.value) // obtenho a referência desse input com o id username
 console.log(event.target.username.value)
 // Vou precisar checar se o valor que o usuário inseriu é válido
 // Aí entra as regular expressions
})
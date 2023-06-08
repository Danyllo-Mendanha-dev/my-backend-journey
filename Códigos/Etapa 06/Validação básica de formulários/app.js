const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
  event.preventDefault() // No envio desse form eu estou impendindo que os dados sejam enviados para o servidor e que a página seja recarregada

  const isAValidUsername = testUsername( event.target.username.value)
  
  if(isAValidUsername){
    feedback.textContent = 'username válido'
    return
  }

  feedback.textContent = 'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras'
})

// o evento keyup esse evento vai executar uma função de callback toda vez que a tecla pressionada for liberada

form.username.addEventListener('keyup', event => {

  const isAValidUsername = testUsername(event.target.value)
  console.log(event)
  if (isAValidUsername) {
    form.username.setAttribute('class', 'success')
    return
  }

  form.username.setAttribute('class', 'error')
})
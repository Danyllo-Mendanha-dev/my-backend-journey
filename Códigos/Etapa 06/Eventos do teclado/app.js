const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')


form.addEventListener('submit', event => {
  event.preventDefault() // No envio desse form eu estou impendindo que os dados sejam enviados para o servidor e que a página seja recarregada

  const username = event.target.username.value
  const usernameRegex = /^[a-zA-Z]{6,12}$/
  const isAValidUsername = usernameRegex.test(username)
  
  if(isAValidUsername){
    feedback.textContent = 'username válido'
    return
  }

  feedback.textContent = 'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras'
})
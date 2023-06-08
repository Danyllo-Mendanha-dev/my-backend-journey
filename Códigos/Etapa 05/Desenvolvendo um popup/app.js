const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () =>{
  popup.style.display = 'block'
})

popup.addEventListener('click', event => {
  const mouseClickedElement = event.target.classList[0]
  console.log(mouseClickedElement)
  const classNames = ['popup-wrapper', 'popup-close', 'popup-link']

  const shouldClosedPopup = classNames.some(className => className === mouseClickedElement)

  if(shouldClosedPopup){
    popup.style.display = 'none'
  }
})
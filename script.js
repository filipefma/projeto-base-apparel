let errMessage = document.querySelector('.err-message')
errMessage.style.display = 'none'
let errIcon = document.querySelector('#err-icon')
errIcon.style.display = 'none'
let input = document.querySelector('#input-email')
let btn = document.querySelector('button')
let form = document.querySelector('form')

form.addEventListener("submit", validate)
btn.addEventListener('click', validate)

function validate(ev) {
  ev.preventDefault()

  const inputValue = input.value.trim()

  if(!isEmail(inputValue)) {
    errMessage.style.display = 'flex'
    errIcon.style.display = 'flex'
    input.style.borderColor = 'hsl(0, 93%, 68%)'
  } else {
    errMessage.style.display = 'none'
    errIcon.style.display = 'none'
    input.style.borderColor = '#eeeeee'
  }
}

function isEmail (input) {
  return /\S+@\S+\.\S+/.test(input)
}
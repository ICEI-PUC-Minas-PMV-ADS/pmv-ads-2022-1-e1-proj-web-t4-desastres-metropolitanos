const login = document.getElementById('login-container')
const email = document.getElementById('email')
const password = document.getElementById('password') 

login.addEventListener('submit', (event) => {
  event.preventDefault()

  inputCheck()
})

function inputCheck(){
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if(emailValue === '') {
    setError(email, 'Preencha esse campo')
  } else if (!isEmail(emailValue)) {
      setError(email, 'Email inválido')
  } else {
      setSuccess(email)
}

if(passwordValue === '') {
    setError(password, 'Preencha esse campo')

  } else if(passwordValue.length < 8) { 
      setError(password, 'A senha deve ter no minimo 8 caracteres')
  } else {
      setSuccess(password)
  }
}



function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message

  formControl.className = 'form-control error'
}

function setSuccess(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
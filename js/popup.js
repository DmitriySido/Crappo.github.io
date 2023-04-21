const signUpPopup = document.querySelector('.popup-register')
const regForm = document.querySelector('.register__form')

let isRegister = false

//Buttons
const submitButton = signUpPopup.querySelector('.enter')
const allButton = document.querySelectorAll('.reg')

for(btn of allButton){
	if(!isRegister){
		btn.addEventListener('click', function(evt){
			evt.preventDefault()
			signUpPopup.classList.toggle('popup-register--active')
		})
	}
}

const closeSignUpPopup = () =>{
	signUpPopup.classList.remove('popup-register--active')
}

document.addEventListener('mousedown', function(e){
  if(e.target.closest('.register__form') === null){
    closeSignUpPopup()
  }
})

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape') {
	 closeSignUpPopup()
	}
})

submitButton.addEventListener('click', function(e){
	e.preventDefault()
	location.reload()
})

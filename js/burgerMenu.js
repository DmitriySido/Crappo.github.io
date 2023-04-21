const burgerButton = document.querySelector('#burger')
const burgerMenu = document.querySelector('.header-navigation')
const header = document.querySelector('.header')

const closeMenu = () =>{
	burgerMenu.classList.remove('header-navigation--active')
}

const toggleScroll = () =>{
	document.body.classList.remove('body-scroll')
}

burgerButton.addEventListener('change', function(){
	document.body.classList.toggle('body-scroll')
	burgerMenu.classList.toggle('header-navigation--active')
})

document.addEventListener('mousedown', function(e){
  if(e.target.closest('.header') === null){
  	toggleScroll()
    closeMenu()
    burgerButton.checked = false
  }
})

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape') {
		toggleScroll()
    closeMenu()
    burgerButton.checked = false
	}
})
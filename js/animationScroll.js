const scrollItems = document.querySelectorAll('.scroll-item')

const scrollAnimation = () =>{ //Чтобы при скорле добавлялся класс nimation-class и к нему пременялись стили из CSS
	let windowCenter = (window.innerHeight / 1) + window.scrollY
	scrollItems.forEach(el => {
		let scrollOffset = el.offsetTop + (el.offsetHeight / 1)
		if(windowCenter >= scrollOffset){
			el.classList.add('animation-class')
		}
	})
}

//Вызов функций
scrollAnimation()

window.addEventListener('scroll', () => {
	scrollAnimation()
})


const paymentSlider = document.querySelector('.payment-slider')
const sliderSwich = document.querySelector('.payment__button')
const sliderList = document.querySelector('.payment-slider__list')

sliderSwich.addEventListener('click', function(){
	paymentSlider.classList.toggle('payment-slider--active');
})
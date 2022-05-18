const headerElement = document.querySelector('header')
window.onscroll = (e) => {
	if (window.scrollY >= headerElement.clientHeight) {
		headerElement.classList.remove('removefadeout')
		headerElement.classList.add('fadeout')
	} else {
		headerElement.classList.add('removefadeout')
	}
}

const slider = document.querySelector('.slider_customer')
$(document).ready(function () {
	$('.slider_customer').slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		nextArrow: `
        <button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;">→</button>`,
		prevArrow: `
        <button class="slick-prev slick-arrow" aria-label="Prev" type="button" style="display: block;">←</button>`,
	})
})

'use strict';
// ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

document.querySelectorAll('a[href*="#"]').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()

		const href = this.getAttribute('href').substring(1);

		const scrollTagret = document.getElementById(href);

		const topOffset = document.querySelector('.header').offsetHeight;
		if (window.innerWidth < 480) {
			topOffset === 100;
		}
		const elementPosition = scrollTagret.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock');
			menuBody.classList.remove('_active');
			iconMenu.classList.remove('_active');
		}

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		})
	});
});

// ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ ПЛАВНЫЙ СКРОЛЛ + ЗАКРЫВАЮЩЕЕСЯ БУРГЕР МЕНЮ


// МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО

document.getElementById('open-modal').addEventListener('click', function () {
	document.getElementById('modal-prod-1').classList.add('_open')
})
document.getElementById('close-modal').addEventListener('click', function () {
	document.getElementById('modal-prod-1').classList.remove('_open')
})
document.getElementById('open-modal-2').addEventListener('click', function () {
	document.getElementById('modal-prod-2').classList.add('_open')
})
document.getElementById('close-modal-2').addEventListener('click', function () {
	document.getElementById('modal-prod-2').classList.remove('_open')
})
document.getElementById('open-modal-3').addEventListener('click', function () {
	document.getElementById('modal-prod-3').classList.add('_open')
})
document.getElementById('close-modal-3').addEventListener('click', function () {
	document.getElementById('modal-prod-3').classList.remove('_open')
})
document.getElementById('open-modal-4').addEventListener('click', function () {
	document.getElementById('modal-prod-4').classList.add('_open')
})
document.getElementById('close-modal-4').addEventListener('click', function () {
	document.getElementById('modal-prod-4').classList.remove('_open')
})
document.getElementById('open-modal-5').addEventListener('click', function () {
	document.getElementById('modal-prod-5').classList.add('_open')
})
document.getElementById('close-modal-5').addEventListener('click', function () {
	document.getElementById('modal-prod-5').classList.remove('_open')
})
document.getElementById('open-modal-6').addEventListener('click', function () {
	document.getElementById('modal-prod-6').classList.add('_open')
})
document.getElementById('close-modal-6').addEventListener('click', function () {
	document.getElementById('modal-prod-6').classList.remove('_open')
})

document.getElementById('open-modal-form').addEventListener('click', function () {
	document.getElementById('modal-form').classList.add('_open')
})
document.getElementById('close-modal-form').addEventListener('click', function () {
	document.getElementById('modal-form').classList.remove('_open')
})
// document.querySelector('#modal-form .form-application__box').addEventListener('click', event => {
// 	event._isClickWithModal = true;
// });
// document.getElementById('modal-form').addEventListener('click', event => {
// 	if (event._isClickWithModal) return;
// 	event.currentTarget.classList.remove('_open');
// })






document.getElementById('open-modal-form-2').addEventListener('click', function () {
	document.getElementById('modal-form-2').classList.add('_open')
})
document.getElementById('close-modal-form-2').addEventListener('click', function () {
	document.getElementById('modal-form-2').classList.remove('_open')
})
document.getElementById('open-modal-form-3').addEventListener('click', function () {
	document.getElementById('modal-form-3').classList.add('_open')
})
document.getElementById('close-modal-form-3').addEventListener('click', function () {
	document.getElementById('modal-form-3').classList.remove('_open')
})
document.getElementById('open-modal-form-4').addEventListener('click', function () {
	document.getElementById('modal-form-4').classList.add('_open')
})
document.getElementById('close-modal-form-4').addEventListener('click', function () {
	document.getElementById('modal-form-4').classList.remove('_open')
})
document.getElementById('open-modal-form-5').addEventListener('click', function () {
	document.getElementById('modal-form-5').classList.add('_open')
})
document.getElementById('close-modal-form-5').addEventListener('click', function () {
	document.getElementById('modal-form-5').classList.remove('_open')
})
document.getElementById('open-modal-form-6').addEventListener('click', function () {
	document.getElementById('modal-form-6').classList.add('_open')
})
document.getElementById('close-modal-form-6').addEventListener('click', function () {
	document.getElementById('modal-form-6').classList.remove('_open')
})
document.getElementById('open-modal-form-7').addEventListener('click', function () {
	document.getElementById('modal-form-7').classList.add('_open')
})
document.getElementById('close-modal-form-7').addEventListener('click', function () {
	document.getElementById('modal-form-7').classList.remove('_open')
})


// МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО


//СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР
function initSliders() {
	if (document.querySelector('.promotions__slider.swiper')) {

		new Swiper('.promotions__slider.swiper', {
			slidesPerView: 1,
			loop: true,
			// Навигация
			navigation: {
				nextEl: '.promotions__arrow.promotions__next',
				prevEl: '.promotions__arrow.promotions__prev',
			},
		});
	}
}
window.addEventListener("load", function (e) {
	initSliders();
});
//СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР

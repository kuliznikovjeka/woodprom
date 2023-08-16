'use strict';
// ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР
// const header = document.querySelector('.header');
// const ai = document.querySelector('.ai');
// const hederHeight = header.offsetHeight;
// const aiHeight = ai.offsetHeight;

// window.addEventListener('scroll', () => {
// 	let scrollDistance = window.scrollY;
// 	console.log(scrollDistance);

// 	if (scrollDistance >= aiHeight - 50) {
// 		header.classList.add('header__fixed');
// 		ai.style.marginTop = `${hederHeight}px`;
// 	} else {
// 		header.classList.remove('header__fixed');
// 		ai.style.marginTop = null;
// 	}
// });
// ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР ДВИЖУЩИЙСЯ ХЕДЕР

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

		const topOffset = document.querySelector('.header').offsetHeight + 15;
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
	document.getElementById('my-modal').classList.add('_open')
})

document.getElementById('close-my-modal-btn').addEventListener('click', function () {
	document.getElementById('my-modal').classList.remove('_open')
})

// МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО // МОДАЛЬНОЕ ОКНО


//СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР
function initSliders() {
	if (document.querySelector('.cases__slider.swiper')) {

		new Swiper('.cases__slider.swiper', {
			slidesPerView: 3,
			spaceBetween: 80,
			// loop: true,
			// centeredSlides: true,
			// autoplay: {
			// 	delay: 1500,
			// 	disableOnInteraction: false,
			// },

			// Навигация
			navigation: {
				nextEl: '.cases__arrow.cases__next',
				prevEl: '.cases__arrow.cases__prev',
			},

			pagination: {
				el: '.cases__pagination',
				clickable: true,
			},

			// адаптив
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,

				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1090: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1100: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1315: {
					slidesPerView: 3,
					spaceBetween: 80,
				},
			}
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});
//СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР СЛАЙДЕР



// АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			//настройка момента старта анимации
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	//функция для корректного получения значения offset
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	//задержка добавления класса active, для загрузки первого экрана
	setTimeout(() => {
		animOnScroll();
	}, 300);
}
// АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ
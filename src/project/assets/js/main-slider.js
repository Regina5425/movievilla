function slider() {
	const slider = document.querySelector('.main-slider'),
		slides = document.querySelectorAll('.main-slider__slide');

	let slideIndex = 1;

	showSlides(slideIndex);

	function showSlides(index) {
		if (index > slides.length) {
			slideIndex = 1;
		}

		if (index < 1) {
			slideIndex = slides.length;
		}

		slides.forEach(slide => {
			slide.style.display = 'none';
		});

		slides[slideIndex - 1].style.display = 'block';
		slides[slideIndex - 1].classList.add('fade');
	}

	function changeSlides(n) {
		showSlides(slideIndex += n);
	}

	const pagination = document.createElement('ol'),
		dots = [];

	pagination.classList.add('slider-dots');
	slider.append(pagination);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.classList.add('slider-dots__dot');
		dot.setAttribute('data-slide-index', i + 1);
		if (i == 0) {
			dot.classList.add('slider-dots__dot--active');
		}
		pagination.append(dot);
		dots.push(dot);
	}

	setInterval(() => {
		changeSlides(1);
		dots.forEach(dot => {
			dot.classList.remove('slider-dots__dot--active');
		});
		dots[slideIndex - 1].classList.add('slider-dots__dot--active');
	}, 4000);
}

export default slider;
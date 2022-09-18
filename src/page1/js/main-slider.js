function slider() {
	const slides = document.querySelectorAll('.main-slider__slide'),
		prevBtn = document.querySelector('.slider-arrows__prev'),
		nextBtn = document.querySelector('.slider-arrows__next');
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

	// setInterval(() => {
	// 	changeSlides(1);
	// }, 5000);

	prevBtn.addEventListener('click', () => {
		changeSlides(-1);
	});

	nextBtn.addEventListener('click', () => {
		changeSlides(1);
	});
}

export default slider;
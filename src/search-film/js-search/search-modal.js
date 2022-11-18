function searchFilmsForm() {
	const form = document.querySelector('.search-form'),
		searchInput = document.querySelector('.search__input'),
		searchModal = document.querySelector('.search-modal'),
		searchWrapper = document.querySelector('.search-modal__wrapper');

	function openSearchModal() {
		searchModal.classList.remove('search-modal__hide');
		searchModal.classList.add('search-modal__show', 'fade');
	}

	function closeSearchModal() {
		searchModal.classList.remove('search-modal__show');
		searchModal.classList.add('search-modal__hide');
	}

	// const API_KEY_REGINA = 'k_d8sb2mok';
	const API_KEY_REGINA_1 = 'k_my3q9ejq';

	function createFilms(img, id, title) {
		const filmsContent = document.createElement('ul');
		filmsContent.classList.add('search-modal__content');
		searchWrapper.append(filmsContent);

		const filmsList = document.createElement('li');
		filmsContent.append(filmsList);

		const film = document.createElement('a');
		film.setAttribute('href', 'film.html');
		film.classList.add('search-modal-film');
		filmsList.append(film);

		const filmImg = document.createElement('img');
		filmImg.classList.add('search-modal-film__img');
		filmImg.src = img;
		filmImg.alt = id;
		film.prepend(filmImg);

		const filmTitle = document.createElement('h3');
		filmTitle.classList.add('search-modal-film__title');
		filmTitle.textContent = title;
		film.append(filmTitle);
	}

	async function searchFilm(index) {
		try {
			const userSearch = searchInput.value.trim();
			const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${API_KEY_REGINA_1}/${userSearch}`);
			const searched = await response.json();

			const searchedFilmImg = searched.results[index].image;
			const searchedFilmId = searched.results[index].id;
			const searchedFilmTitle = searched.results[index].title;

			openSearchModal();
			createFilms(searchedFilmImg, searchedFilmId, searchedFilmTitle);
		} catch (err) {
			err.innerHTML = `
			<div class="search-modal-film__error">Фильм не найден</div>
		`;
		} finally {
			form.reset();
		}
	}

	function clearResult() {
		const filmContent = document.querySelectorAll('.search-modal__content');
		filmContent.forEach(film => {
			if (film) {
				film.remove();
			}
		});
	}

	function saveFilms(popular) {
		const popFilms = JSON.stringify(popular);
		localStorage.setItem('popular', popFilms);
	}

	async function showPopularFilms(index) {
		try {
			const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${API_KEY_REGINA_1}`);
			const popular = await response.json();

			for (let i = 0; i < 1; i++) {
				saveFilms(popular);
			}

			const filmGetImg = popular.items[index].image;
			const filmGetId = popular.items[index].id;
			const filmGetTitle = popular.items[index].title;

			createFilms(filmGetImg, filmGetId, filmGetTitle);
		} catch (err) {
			err.innerHTML = `
				<div class="search-modal-film__error">Не удалось загрузить фильмы</div>
			`;
		}
	}

	const popularFilmsTitle = document.createElement('h2');
	popularFilmsTitle.classList.add('search-modal__title');
	popularFilmsTitle.textContent = 'Популярные фильмы';
	searchWrapper.prepend(popularFilmsTitle);

	for (let i = 0; i < 5; i++) {
		showPopularFilms(i);
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		popularFilmsTitle.remove();
		clearResult();
		searchFilm(0);
	});

	searchInput.addEventListener('focus', openSearchModal);
	searchModal.addEventListener('click', closeSearchModal);
}

export default searchFilmsForm;
import films from "../filmsDB"; //убрать

function searchFilmsForm() {
	//все найденные элементы заменить на классы в форме поиска главной страницы
	const form = document.querySelector('.search'),
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

	searchInput.addEventListener('focus', openSearchModal);
	searchModal.addEventListener('click', closeSearchModal);

	//get-запрос (показывает популярные фильмы при фокусе на инпут)
	// const API_KEY_REGINA = 'k_d8sb2mok';
	const API_KEY_REGINA_1 = 'k_my3q9ejq';

	function createFilms(img, id, title) {
		const filmsContent = document.createElement('ul');
		filmsContent.classList.add('search-modal__content');
		searchWrapper.append(filmsContent);

		const filmsList = document.createElement('li');
		filmsContent.append(filmsList);

		const film = document.createElement('a');
		film.setAttribute('href', '#');
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

	function hideFilms() {
		const filmContent = document.querySelector('.search-modal__content');
		filmContent.style.display = 'none';
	}

	async function showPopularFilms(index) {
		try {
			const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${API_KEY_REGINA_1}`);
			const showed = await response.json();

			const filmGetImg = showed.items[index].image;
			const filmGetId = showed.items[index].id;
			const filmGetTitle = showed.items[index].title;

			createFilms(filmGetImg, filmGetId, filmGetTitle);
		} catch (err) {
			err.innerHTML = `
				<div class="search-modal-film__error">Не удалось загрузить фильмы</div>
			`;
		}
	}

	async function searchFilm(index) {
		try {
			const userSearch = searchInput.value.trim();
			const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${API_KEY_REGINA_1}/${userSearch}`);
			const searched = await response.json();

			const searchedFilmImg = searched.results[index].image;
			const searchedFilmId = searched.results[index].id;
			const searchedFilmTitle = searched.results[index].title;

			createFilms(searchedFilmImg, searchedFilmId, searchedFilmTitle);
		} catch (err) {
			err.innerHTML = `
			<div class="search-modal-film__error">Фильм не найден</div>
		`;
		}
	}

	// for (let i = 0; i < 10; i++) {
	// 	showPopularFilms(i);
	// }

	// form.addEventListener('input', () => {
	// 	for (let i = 0; i < 4; i++) {
	// 		searchFilm(i);
	// 	}
	// });

	// showPopularFilms(0);
	// form.addEventListener('input', () => {
	// 	hideFilms();
	// 	searchFilm(0);
	// });


	//тестовая функция
	function showtest1(index) {
		const filmGetImg = films.items[index].image;
		const filmGetId = films.items[index].id;
		const filmGetTitle = films.items[index].title;
		createFilms(filmGetImg, filmGetId, filmGetTitle);
	}

	function searchtest2(index) {
		const userSearch = searchInput.value.trim();
		if(userSearch === films.title) {
			const searchedFilmImg = films.items[index].image;
			const searchedFilmId = films.items[index].id;
			const searchedFilmTitle = films.items[index].title;

			createFilms(searchedFilmImg, searchedFilmId, searchedFilmTitle);
		}
	}

	for (let i = 0; i < 10; i++) {
		showtest1(i);
	}
}

export default searchFilmsForm;
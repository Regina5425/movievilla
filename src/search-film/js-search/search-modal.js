function searchFilm() {
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

	//get-запрос (показывает фильмы при фокусе на инпут)
	const API_KEY_REGINA = 'k_d8sb2mok';

	async function showPopularFilms(index) {
		try {
			const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${API_KEY_REGINA}`);
			const showed = await response.json();

			const filmGetImg = showed.items[index].image;
			const filmGetId = showed.items[index].id;
			const filmGetTitle = showed.items[index].title;
			console.log(showed);
			console.log(filmGetImg);
			console.log(filmGetId);
			console.log(filmGetTitle);

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
			filmImg.src = filmGetImg;
			filmImg.alt = filmGetId;
			film.prepend(filmImg);

			const filmTitle = document.createElement('h3');
			filmTitle.classList.add('search-modal-film__title');
			filmTitle.textContent = filmGetTitle;
			film.append(filmTitle);
		} catch(err) {
			err.innerHTML = `
				<div class="search-modal-film__error">Не удалось загрузить фильмы</div>
			`;
		}
	}

	showPopularFilms(0);
	showPopularFilms(1);
	showPopularFilms(2);
	showPopularFilms(3);
	showPopularFilms(4);
	showPopularFilms(5);
	showPopularFilms(6);
	showPopularFilms(7);
	showPopularFilms(8);
	showPopularFilms(9);
}

export default searchFilm;
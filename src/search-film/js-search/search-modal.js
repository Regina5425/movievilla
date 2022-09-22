function searchFilm() {
	//все найденные элементы заменить на классы в форме поиска главной страницы
	const form = document.querySelector('.search'),
		searchInput = document.querySelector('.search__input'),
		searchModal = document.querySelector('.search-modal');

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
}

export default searchFilm;
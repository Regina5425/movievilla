import Card from "./card.js";

console.log('я туть');

const blockFavorites = document.querySelector('.favorites-block');

/* получаем список избранного из localStorage или пустым делаем */
function getFavorites() {
    let favoritesFilm = JSON.parse(localStorage.getItem('favorites'));
    if (!favoritesFilm) {
        favoritesFilm = {
            films: []
        };
    }
    return favoritesFilm.films;
}

let favorites = getFavorites();
console.log(favorites);

/* получаем инфу о фильмах */

/* рисуем список карточек фильмов из избранного */

/* рисуем иконки избранного на фильмах */
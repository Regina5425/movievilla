import Card from "./card.js";
import {getDataFromLocal} from "./workwithdata";
import {setDataToLocal} from "./workwithdata";

const blockFavorites = document.querySelector('.favorites-block');

/* получаем список избранного из localStorage или пустым делаем */
let favorites = getDataFromLocal("favorites", "films");
let arrayFavorites = favorites.films;

/* получаем инфу о фильмах */

if (arrayFavorites.length > 0) {
    /* рисуем список карточек фильмов из избранного */
    
    let arrCard = [];

    (async (arrayFavorites) => {
        
            try {
                for (let i = 0; i < arrayFavorites.length; i++) {
                    const result = await getData(arrayFavorites[i]);
                    if (!result.id) {
                        throw new Error('Sorry. API_KEY spoiled.');
                    }
                    arrCard[i] = new Card(result);
                    arrCard[i].render(blockFavorites);
                }
            } catch (error) {
                console.log(error);
                let errorMsg = document.createElement('p');
                errorMsg.textContent = error.message;
                errorMsg.classList.add('error');
                blockFavorites.append(errorMsg);
            }
    })(arrayFavorites);

    /* рисуем иконки избранного на фильмах */

} else {
    let divError = document.createElement('div');
    divError.classList.add('error');
    divError.textContent = `Избранных фильмов нет :( `;
    blockFavorites.append(divError);
}

async function getData(id) {
    try {
        let url = 'https://imdb-api.com/en/API/Title/k_pg59pfpp/' + id + '/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,';
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        let errorMsg = document.createElement('p');
        errorMsg.textContent = 'Sorry. Server is not avaliable.';
        errorMsg.classList.add('error');
        blockFavorites.append(errorMsg);
    }
}
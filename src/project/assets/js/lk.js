import Card from "./card.js";
import {getDataFromLocal} from "./workwithdata";
import {setDataToLocal} from "./workwithdata";
import Favorite from "./favorite";
import imgError from "../img/oops-err.png";

const blockFavorites = document.querySelector('.favorites-block');

let favorites = getDataFromLocal("favorites", "films");
let arrayFavorites = favorites.films;

if (arrayFavorites.length > 0) {
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
                    let icon = new Favorite(result.id);
                    let arrIcon = document.querySelectorAll('.slider-arrow__card');
                    icon.render(arrIcon[i]);
                }
            } catch (error) {
                console.log(error);
                let errorImg = document.createElement('img');
                errorImg.classList.add('error');
                errorImg.alt = "error page";
                errorImg.src = imgError;
                blockFavorites.append(errorImg);
            
                let errorMsg = document.createElement('p');
                errorMsg.textContent = 'Sorry. API_KEY spoiled.';
                errorMsg.classList.add('error');
                blockFavorites.append(errorMsg);
            }
    })(arrayFavorites);



} else {
    let divError = document.createElement('div');
    divError.classList.add('error');
    divError.textContent = `Избранных фильмов нет :( `;
    blockFavorites.append(divError);
}

async function getData(id) {
    try {
        let url = 'https://imdb-api.com/en/API/Title/k_4wflfh9z/' + id + '/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,';
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
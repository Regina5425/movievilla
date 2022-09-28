import heartGrey from "../img/heart_grey.svg";
import heartRed from "../img/heart_red.svg";

import {getDataFromLocal} from "./workwithdata";
import {setDataToLocal} from "./workwithdata";

import Favorite from "./favorite";

const id = localStorage.getItem("idFilm");
console.log(id);
const content = document.querySelector('.content');
const COUNT_ACTORS = 5;

class Film {
    constructor(id) {
        this.id = id;
    }

    async getInfoFromServer() {
        try {
            let url = 'https://imdb-api.com/en/API/Title/k_o0135nnp/' + this.id + '/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,';
            let response = await fetch(url);
            let data = await response.json();
            console.log('я тут: ', data);
            localStorage.setItem("film", JSON.stringify(data));
            return data;
        } catch (error) {
            console.log(error);
            let errorMsg = document.createElement('p');
            errorMsg.textContent = 'Sorry. Server is not avaliable.';
            errorMsg.classList.add('error');
            content.append(errorMsg);
        }
    }

    async render() {
        try {
            let film = await this.getInfoFromServer();

            let fragment = new DocumentFragment();

            let divImageBlock = document.createElement('div');
            divImageBlock.classList.add('illustration');

            let image = document.createElement('img');
            image.src = film.image;
            image.alt = film.title;
            image.classList.add('illustration__img');

            let icon = new Favorite(id);
            icon.render(divImageBlock);

            let divTextBlock = document.createElement('div');
            divTextBlock.classList.add('about-film');

            let h2 = document.createElement('h2');
            h2.textContent = film.title;
            h2.classList.add('about-film__title');

            let genres = document.createElement('p');
            genres.textContent = film.genres;

            let year = document.createElement('p');
            year.textContent = film.year;

            let companies = document.createElement('p');
            companies.textContent = film.companies;

            let rating = document.createElement('p');
            rating.textContent = `IMDb: ${film.imDbRating}`;

            let plot = document.createElement('p');
            plot.innerHTML = film.wikipedia.plotShort.html;

            let divActorBlock = document.createElement('div');
            divActorBlock.classList.add('actors-block');
        
            let actors = film.actorList;

            for (let i = 0; i < COUNT_ACTORS; i++) {
                const element = actors[i];
            
                let figure = document.createElement('figure');
                let imgActor = document.createElement('img');
                imgActor.src = element.image;
                imgActor.alt = element.name;
                imgActor.classList.add('actors-block__img');
                imgActor.width = 200;
                let figcaption = document.createElement('figcaption');
                figcaption.textContent = element.name;

                divActorBlock.append(figure);
                figure.append(imgActor);
                figure.append(figcaption);
            }

            fragment.append(divImageBlock);
            divImageBlock.append(image);

            fragment.append(divTextBlock);
            divTextBlock.append(h2);
            divTextBlock.append(genres);
            divTextBlock.append(year);
            divTextBlock.append(companies);
            divTextBlock.append(rating);
            divTextBlock.append(plot);
            divTextBlock.append(divActorBlock);

            content.append(fragment);
        } catch (error) {
            console.log(error);
            let errorMsg = document.createElement('p');
            errorMsg.textContent = 'Sorry. JSON is not avaliable.';
            errorMsg.classList.add('error');
            content.append(errorMsg);
        }
    }
}

let film = new Film(id);
film.render();
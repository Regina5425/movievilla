import Card from "./card.js";
import imgError from "../img/oops-err.png";

const divFilms = document.querySelector('.all-films__block');

const title = localStorage.getItem("title");

const h3 = document.querySelector('.all-films__title');
h3.textContent = title;

let allCard = [];

try {
    allCard = JSON.parse(localStorage.getItem(title));

    for (const item of allCard) {
        let card = new Card(item);
            card.render(divFilms);
}
} catch (error) {
    console.log(error);
    let errorImg = document.createElement('img');
    errorImg.classList.add('error');
    errorImg.alt = "error page";
    errorImg.src = imgError;
    divFilms.append(errorImg);

    let errorMsg = document.createElement('p');
    errorMsg.textContent = 'Sorry. API_KEY spoiled.';
    errorMsg.classList.add('error');
    divFilms.append(errorMsg);
}
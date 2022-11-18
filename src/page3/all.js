import Card from "./card.js";

const divFilms = document.querySelector(".all-films__block");

const title = localStorage.getItem("title");

const h3 = document.querySelector(".all-films__title");
h3.textContent = title;

let allCard = [];

try {
  allCard = JSON.parse(localStorage.getItem(title));

  for (const item of allCard) {
    let card = new Card(item);
    card.render(divFilms);
  }
} catch (error) {
  let errorMsg = document.createElement("p");
  errorMsg.textContent = "Sorry. Server is not avaliable.";
  errorMsg.classList.add("error");
  divFilms.append(errorMsg);
}

import imgArrowLeft from "../img/arrow_left.svg";
import imgArrowRight from "../img/arrow_right.svg";

import Card from "./card.js";

function clearBlock(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

const main = document.querySelector('.main');
let objCards = {};

class ArrowSlider {
    constructor(name, url, number) {
        this.name = name;
        this.url = url;
        this.number = number;
        this.arr = [];
    }

    async getDataFromServer(name, url) {
        try {
            let response = await fetch(url);
    
            let data = await response.json();

            for (const elem of data.items) {
                this.arr.push(elem);
            } 
            localStorage.setItem(name, JSON.stringify(this.arr));

            return data.items;
        } catch (error) {
            console.log(error);
        }
    }

    async getData(name,url) {
        try {
            let data = JSON.parse(localStorage.getItem(name));
            if (!data) {
                data = await this.getDataFromServer(name, url);
            }

            // let data1 = JSON.parse(localStorage.getItem(name));
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const fragment = new DocumentFragment();

        const section = document.createElement('section');
        section.classList.add('section__slider');

        const divHeader  = document.createElement('div');
        divHeader.classList.add('slider-arrow');

        const h3  = document.createElement('h3');
        h3.classList.add('slider-arrow__title', this.number + '__title');
        h3.textContent = this.name;

        const linkAll= document.createElement('a');
        linkAll.href = "all.html";
        linkAll.classList.add('slider-arrow__link', 'linkall-' + this.number);
        linkAll.textContent = `View all`;
        linkAll.addEventListener("click", this.clickAll);

        const divBlock = document.createElement('div');
        divBlock.classList.add('slider-arrow__block');

        const arrowLeft = document.createElement('a');
        arrowLeft.href = "";
        arrowLeft.id = this.number + `-arrow_left`;
        arrowLeft.classList.add('slider-arrow__left', 'invisible');
        arrowLeft.addEventListener("click", this.clickArrow);

        const imgLeft = document.createElement('img');
        imgLeft.alt = "arrow left";
        imgLeft.src = imgArrowLeft;
        imgLeft.classList.add('slider-arrow__img');

        const divFilms = document.createElement('div');
        divFilms.classList.add('slider-arrow__films', this.number);

        const arrowRight = document.createElement('a');
        arrowRight.href = "";
        arrowRight.id = this.number + `-arrow_right`;
        arrowRight.classList.add('slider-arrow__right');
        arrowRight.addEventListener("click", this.clickArrow);

        const imgRight = document.createElement('img');
        imgRight.alt = "arrow right";
        imgRight.src = imgArrowRight;
        imgRight.classList.add('slider-arrow__img');

        fragment.append(section);
        section.append(divHeader);
        divHeader.append(h3);
        divHeader.append(linkAll);
        section.append(divBlock);
        divBlock.append(arrowLeft);
        arrowLeft.append(imgLeft);
        divBlock.append(divFilms);
        divBlock.append(arrowRight);
        arrowRight.append(imgRight);

        main.append(fragment);
    }

    async renderCards() {
        try {
            let data = await this.getData(this.name, this.url);
            let arrCard = [];
            
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                arrCard[i] = new Card(element);
            }
            objCards[this.name] = arrCard;

            const div = document.querySelector('.' + this.number);

            for (let i = 0; i < 5; i++) {
                const element = arrCard[i];
                element.render(div);
            }

        } catch (error) {
            console.log(error);
        }

    }

    clickAll(e) {
        let active = e.target;
            console.log(active);

            let number = active.className.match(/\d+/)[0];
            let title = document.querySelector('.slider' + number + '__title').textContent;
            localStorage.setItem("title", title);
    }

    clickArrow(e) {
        e.preventDefault();

        let active = e.currentTarget;
        let arr;
        let title = 0;

        let idArrow = active.id;
        let numberSlider = idArrow.match(/\d+/)[0];
        title = document.querySelector('.slider' + numberSlider + '__title').textContent;

        if (idArrow.match('right')) {
            buttonRight = active;

            if (buttonRight.className.match('invisible')) {
                return;
            }

            (objCards['slider' + numberSlider])++;
            buttonLeft = document.querySelector('#slider' + numberSlider + '-arrow_left');
            buttonLeft.classList.remove('invisible');
            clearBlock(document.querySelector('.slider' + numberSlider));

            arr = objCards[title];

            if ((objCards['slider' + numberSlider]) === 1) {
                for (let i = 4; i < 9; i++) {
                    const element = arr[i];
                    element.render(document.querySelector('.slider' + numberSlider));
                }
            }

            if ((objCards['slider' + numberSlider]) === 2) {
                for (let i = 8; i < 13; i++) {
                    const element = arr[i];
                    element.render(document.querySelector('.slider' + numberSlider));
                }
            }

            if ((objCards['slider' + numberSlider]) === 3) {
                for (let i = 12; i < 17; i++) {
                    const element = arr[i];
                    element.render(document.querySelector('.slider' + numberSlider));
                }
                buttonRight.classList.add('invisible');
            }
        }

        if (idArrow.match('left')) {
            buttonLeft = active;

            if (buttonLeft.className.match('invisible')) {
                return;
            }

            (objCards['slider' + numberSlider])--;
            buttonRight = document.querySelector('#slider' + numberSlider + '-arrow_right');
            buttonRight.classList.remove('invisible');
            clearBlock(document.querySelector('.slider' + numberSlider));

            arr = objCards[title];

            if ((objCards['slider' + numberSlider]) === 2) {
                for (let i = 8; i < 13; i++) {
                    const element = arr[i];
                    element.render(document.querySelector('.slider' + numberSlider));
                }
            }

            if ((objCards['slider' + numberSlider]) === 1) {
                for (let i = 4; i < 9; i++) {
                    const element = arr[i];
                    element.render(document.querySelector('.slider' + numberSlider));
                }
            }

            if ((objCards['slider' + numberSlider]) === 0) {
                for (let i = 0; i < 5; i++) {
                    const element = arr[i];
                    element.render(document.querySelector('.slider' + numberSlider));
                }
                buttonLeft.classList.add('invisible');
            }
        }

    }
}

let slider1 = new ArrowSlider('Top 250 Movies', 'https://imdb-api.com/en/API/Top250Movies/k_o0135nnp', 'slider1');
slider1.render();
slider1.renderCards();
objCards.slider1 = 0;

let slider2 = new ArrowSlider('Top250TVs', 'https://imdb-api.com/en/API/Top250TVs/k_o0135nnp', 'slider2');
slider2.render();
slider2.renderCards();
objCards.slider2 = 0;

// let slider3 = new ArrowSlider('ComingSoon', 'data2.json', 'slider3');
// slider3.render();
// slider3.renderCards();
// objCards.slider3 = 0;

let buttonLeft = document.querySelector('.slider-arrow__left');
let buttonRight = document.querySelector('.slider-arrow__right');
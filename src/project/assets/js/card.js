export let clickFilm = function (e) {
    let active = e.currentTarget;
    // let id = active.id;
    let id = active.dataset.id;
    localStorage.setItem("idFilm", id);
};

class Card {
    constructor(obj) {
        this.image = obj.image;
        this.year = obj.year;
        this.title = obj.title;
        this.id = obj.id;
    }

    render(node) {
        const fragment = new DocumentFragment();

        const link = document.createElement('a');
        link.href = "./film.html";
        link.classList.add('slider-arrow__card-link');
        link.dataset.id = this.id;
        // link.id = this.id;
        link.addEventListener("click", clickFilm);

        const card = document.createElement('div');
        card.classList.add('slider-arrow__card');

        const img = document.createElement('img');
        img.alt = "poster";
        img.src = this.image;
        img.classList.add('slider-arrow__card-img');

        const text = document.createElement('div');
        text.classList.add('slider-arrow__card-text');

        const time = document.createElement('p');
        time.classList.add('slider-arrow__card-text__p');
        time.textContent = this.year;

        const titleElem = document.createElement('p');
        titleElem.classList.add('slider-arrow__card-text__title');
        titleElem.textContent = this.title;

        fragment.append(link);
        link.append(card);
        card.append(img);
        card.append(text);
        text.append(titleElem);
        text.append(time);

        node.append(fragment);
    }

    // clickFilm(e) {
    //     let active = e.currentTarget;
    //     let id = active.id;
    //     localStorage.setItem("idFilm", id);
    // }

}

export default Card;
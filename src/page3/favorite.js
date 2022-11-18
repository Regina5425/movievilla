import heartGrey from "./img/heart_grey.svg";
import heartRed from "./img/heart_red.svg";

import { getDataFromLocal } from "./workwithdata";
import { setDataToLocal } from "./workwithdata";

class Favorite {
  constructor(id) {
    this.id = id;
  }

  render(node) {
    let base = document.createElement("div");
    base.classList.add("heart-circle");
    base.dataset.id = this.id;

    let favorite = document.createElement("img");
    favorite.alt = `heart`;
    favorite.classList.add("heart");
    let toogle = 0;
    let favoritesFilm = getDataFromLocal("favorites", "films");
    let arrFavorites = favoritesFilm.films;
    if (arrFavorites.length > 0) {
      if (arrFavorites.includes(this.id)) {
        favorite.src = heartRed;
        toogle++;
      } else {
        favorite.src = heartGrey;
      }
    } else {
      favorite.src = heartGrey;
    }

    base.addEventListener("click", function (e) {
      let active = e.currentTarget;
      let id = active.dataset.id;

      if (!toogle) {
        favorite.src = heartRed;
        toogle++;
        favoritesFilm.films.push(id);
      } else {
        favorite.src = heartGrey;
        toogle--;
        favoritesFilm.films.splice(favoritesFilm.films.indexOf(id), 1);
      }

      setDataToLocal(favoritesFilm, "favorites", "films");
    });

    base.append(favorite);
    node.append(base);
  }
}

export default Favorite;

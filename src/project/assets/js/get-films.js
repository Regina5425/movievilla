function getFilms() {
  const slides = document.querySelectorAll(".main-slider__slide");
  // const API_KEY = 'k_d8sb2mok';
  // const API_KEY = 'k_my3q9ejq';
  // const API_KEY = "k_4wflfh9z";
  const API_KEY = "k_9lry5v7x";

  async function getMovie(id, index, i) {
    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/Images/${API_KEY}/${id}/Short`
      );
      const searched = await response.json();

      const movieImg = searched.items[index].image;
      const movieTitle = searched.items[index].title;

      const sliderImg = document.createElement("img");
      sliderImg.src = movieImg;
      sliderImg.alt = movieTitle;
      slides[i].append(sliderImg);
    } catch (err) {
      err.innerHtml = `
				<div class="slide-error">
					<img src="../img/oops-err.png" alt="">
				</div>
			`;
    }
  }

  getMovie("tt0468569", 12, 0);
  getMovie("tt0120737", 36, 1);
  getMovie("tt4123432", 4, 2);
  getMovie("tt1160419", 1, 3);
}

export default getFilms;

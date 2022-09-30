var e=function(){const e=document.querySelector(".search-form"),t=document.querySelector(".search__input"),a=document.querySelector(".search-modal"),s=document.querySelector(".search-modal__wrapper");function c(){a.classList.remove("search-modal__hide"),a.classList.add("search-modal__show","fade")}function n(e,t,a){const c=document.createElement("ul");c.classList.add("search-modal__content"),s.append(c);const n=document.createElement("li");c.append(n);const o=document.createElement("a");o.setAttribute("href","film.html"),o.classList.add("search-modal-film"),n.append(o);const r=document.createElement("img");r.classList.add("search-modal-film__img"),r.src=e,r.alt=t,o.prepend(r);const l=document.createElement("h3");l.classList.add("search-modal-film__title"),l.textContent=a,o.append(l)}
//!сохраняем поп фильмы в localStorage
function o(e){const t=JSON.stringify(e);localStorage.setItem("popular",t)}
//!функция показывает популярные фильмы
async function r(e){try{const t=await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_my3q9ejq"),a=await t.json();for(let e=0;e<1;e++)o(a);const s=a.items[e].image,c=a.items[e].id;n(s,c,a.items[e].title)}catch(e){e.innerHTML='\n\t\t\t\t<div class="search-modal-film__error">Не удалось загрузить фильмы</div>\n\t\t\t'}}
//!создание заголовка популярных фильмов
const l=document.createElement("h2");l.classList.add("search-modal__title"),l.textContent="Популярные фильмы",s.prepend(l);
//!вызов функции
for(let e=0;e<5;e++)r(e);e.addEventListener("submit",(a=>{a.preventDefault(),l.remove(),document.querySelectorAll(".search-modal__content").forEach((e=>{e&&e.remove()})),async function(a){try{const s=t.value.trim();console.log(s);const o=await fetch(`https://imdb-api.com/en/API/SearchMovie/k_my3q9ejq/${s}`),r=await o.json(),l=r.results[a].image,d=r.results[a].id,i=r.results[a].title;c(),n(l,d,i)}catch(e){e.innerHTML='\n\t\t\t<div class="search-modal-film__error">Фильм не найден</div>\n\t\t'}finally{e.reset()}}(0)})),t.addEventListener("focus",c),//!исправления
a.addEventListener("click",(function(){a.classList.remove("search-modal__show"),a.classList.add("search-modal__hide")}))};document.addEventListener("DOMContentLoaded",(()=>{e()}));
//# sourceMappingURL=index-search.257304d8.js.map

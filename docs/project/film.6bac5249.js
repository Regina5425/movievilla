function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},l=r.parcelRequire8b71;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},r.parcelRequire8b71=l),l.register("27Lyk",(function(t,r){var n,a;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var l={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)l[t[r]]=e[t[r]]},a=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l("27Lyk").register(JSON.parse('{"bWe1U":"film.6bac5249.js","3nwA2":"heart_grey.45000755.svg","5dbCN":"heart_red.d54e7003.svg","98GFL":"oops-err.5cfb3e47.png"}'));var o;o=new URL("../"+l("27Lyk").resolve("3nwA2"),import.meta.url).toString();var s;s=new URL("../"+l("27Lyk").resolve("5dbCN"),import.meta.url).toString();var i;function c(e,t){let r=JSON.parse(localStorage.getItem(e));return r||(r={[t]:[]}),r}i=new URL("../"+l("27Lyk").resolve("98GFL"),import.meta.url).toString();var d=class{constructor(e){this.id=e}render(e){let r=document.createElement("div");r.classList.add("heart-circle"),r.dataset.id=this.id,console.log(this.id);let n=document.createElement("img");n.alt="heart",n.classList.add("heart");let a=0,l=c("favorites","films"),i=l.films;i.length>0&&i.includes(this.id)?(n.src=t(s),a++):n.src=t(o),r.addEventListener("click",(function(e){let r=e.currentTarget;console.log(r);let i=r.dataset.id;var c,d,m;console.log(i),a?(n.src=t(o),a--,l.films.splice(l.films.indexOf(i),1)):(n.src=t(s),a++,console.log(i),l.films.push(i)),c=l,d="favorites",m="films",localStorage.removeItem(d),localStorage.setItem(d,JSON.stringify({[m]:c[m]}))})),r.append(n),e.append(r)}};const m=localStorage.getItem("idFilm"),p=document.querySelector(".content");new class{constructor(e){this.id=e}async getInfoFromServer(){try{let e="https://imdb-api.com/en/API/Title/k_pg59pfpp/"+this.id+"/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,",t=await fetch(e),r=await t.json();return localStorage.setItem("film",JSON.stringify(r)),r}catch(e){console.log(e);let r=document.createElement("img");r.classList.add("error"),r.alt="error page",r.src=t(i),p.append(r);let n=document.createElement("p");n.textContent="Sorry. API_KEY spoiled.",n.classList.add("error"),p.append(n)}}async render(){try{let e=await this.getInfoFromServer(),t=new DocumentFragment,r=document.createElement("div");r.classList.add("illustration");let n=document.createElement("img");n.src=e.image,n.alt=e.title,n.classList.add("illustration__img"),new d(m).render(r);let a=document.createElement("div");a.classList.add("about-film");let l=document.createElement("h2");l.textContent=e.title,l.classList.add("about-film__title");let o=document.createElement("p");o.textContent=e.genres,o.classList.add("color-text");let s=document.createElement("p");s.textContent=e.year,s.classList.add("color-text");let i=document.createElement("p");i.textContent=e.companies,i.classList.add("color-text");let c=document.createElement("p");c.textContent=`IMDb: ${e.imDbRating}`,c.classList.add("color-text");let u=document.createElement("p");u.innerHTML=e.wikipedia.plotShort.html,u.classList.add("color-text");let g=document.createElement("div");g.classList.add("actors-block");let f=e.actorList;for(let e=0;e<5;e++){const t=f[e];let r=document.createElement("figure"),n=document.createElement("img");n.src=t.image,n.alt=t.name,n.classList.add("actors-block__img"),n.width=200;let a=document.createElement("figcaption");a.textContent=t.name,g.append(r),r.append(n),r.append(a)}t.append(r),r.append(n),t.append(a),a.append(l),a.append(o),a.append(s),a.append(i),a.append(c),a.append(u),a.append(g),p.append(t)}catch(e){console.log(e);let r=document.createElement("img");r.classList.add("error"),r.alt="error page",r.src=t(i),p.append(r);let n=document.createElement("p");n.textContent="Sorry. API_KEY spoiled.",n.classList.add("error"),p.append(n)}}}(m).render();
//# sourceMappingURL=film.6bac5249.js.map

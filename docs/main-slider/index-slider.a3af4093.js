var t=function(){const t=document.querySelectorAll(".main-slider__slide");async function e(e,s,d){try{const n=await fetch(`https://imdb-api.com/en/API/Images/k_d8sb2mok/${e}/Short`),i=await n.json(),a=i.items[s].image,l=i.items[s].title,o=document.createElement("img");o.src=a,o.alt=l,t[d].append(o)}catch(t){t.innerHtml='\n\t\t\t\t<div class="slide-error">\n\t\t\t\t\t<img src="../img/oops-err.png" alt="">\n\t\t\t\t</div>\n\t\t\t'}}e("tt0468569",12,0),e("tt0120737",36,1),e("tt4123432",4,2),e("tt1160419",1,3)};var e=function(){const t=document.querySelector(".main-slider"),e=document.querySelectorAll(".main-slider__slide");let s=1;function d(t){t>e.length&&(s=1),t<1&&(s=e.length),e.forEach((t=>{t.style.display="none"})),e[s-1].style.display="block",e[s-1].classList.add("fade")}d(s);const n=document.createElement("ol"),i=[];n.classList.add("slider-dots"),t.append(n);for(let t=0;t<e.length;t++){const e=document.createElement("li");e.classList.add("slider-dots__dot"),e.setAttribute("data-slide-index",t+1),0==t&&e.classList.add("slider-dots__dot--active"),n.append(e),i.push(e)}setInterval((()=>{d(s+=1),i.forEach((t=>{t.classList.remove("slider-dots__dot--active")})),i[s-1].classList.add("slider-dots__dot--active")}),4e3)};document.addEventListener("DOMContentLoaded",(()=>{t(),e()}));
//# sourceMappingURL=index-slider.a3af4093.js.map
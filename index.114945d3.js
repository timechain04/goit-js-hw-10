!function(){var e="https://api.thecatapi.com/v1",t="live_tzTsyw7krgEZLBeoJMmi7g8WFICFdg0xoTjCAS3CjqcXEkmhgwSfsWDDoUqLh3OS";var n=document.querySelector("select.breed-select"),c=document.querySelector("p.error"),a=document.querySelector("p.loader"),r=document.querySelector("div.cat-info");function o(){a.classList.add("hidden")}function i(){c.classList.remove("hidden")}function s(e){var t=e[0].breeds[0],n={url:e[0].url,alt:t.name},c='\n  <h2 class="header">🐈'.concat(t.name,'</h2>\n  <div class="card">\n  <img src="').concat(n.url,'" alt="Cat breed ').concat(n.alt,'" class="image">\n  <div class="description">\n  <p class="text">').concat(t.description,'</p>\n  <p class="text"><b>Temperament:</b> ').concat(t.temperament,"</p>\n  </div>\n  </div>\n  ");r.innerHTML=c}n.addEventListener("input",(function(n){a.classList.remove("hidden"),c.classList.add("hidden"),(r=n.currentTarget.value,fetch("".concat(e,"/images/search?breed_ids=").concat(r,"&api_key=").concat(t)).then((function(e){if(!e.ok)throw new Error(e.statusText||e.status);return e.json()}))).then(s).catch(i).finally(o);var r})),fetch("".concat(e,"/breeds/?api_key=").concat(t)).then((function(e){if(!e.ok)throw new Error(e.statusText||e.status);return e.json()})).then((function(e){var t=e.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("");n.innerHTML=t,n.value="",n.classList.remove("hidden")})).catch(i).finally(o)}();
//# sourceMappingURL=index.114945d3.js.map
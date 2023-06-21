import { fetchBreeds, fetchCatByBreed } from "./cat-api";
const selectEl = document.querySelector('select.breed-select');
const errorEl = document.querySelector('p.error');
const loadEl = document.querySelector('p.loader');
const catInfo = document.querySelector('div.cat-info');

selectEl.addEventListener('input', onSelectorInput);

fetchBreeds()
  .then(renderSelect)
  .catch(showError)
  .finally(hideLoad);

function renderSelect(json) {
  const optionsMarkup = json.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
  selectEl.innerHTML = optionsMarkup;
  selectEl.value = '';
  selectEl.classList.remove('hidden');
}

function hideLoad() {
  loadEl.classList.add('hidden');
}

function showError() {
  errorEl.classList.remove('hidden');
}

function showLoad() {
  loadEl.classList.remove('hidden');
  errorEl.classList.add('hidden');
}

function onSelectorInput(event) {
  showLoad();
  const chosenBreed = event.currentTarget.value;
  fetchCatByBreed(chosenBreed).then(renderCatCard).catch(showError).finally(hideLoad)
}

function renderCatCard(json) {
  const breedInfo = json[0].breeds[0];
  const img = {
      url: json[0].url,
      alt: breedInfo.name,
  }
  const markup = 
  `
  <h2 class="header">🐈${breedInfo.name}</h2>
  <div class="card">
  <img src="${img.url}" alt="Cat breed ${img.alt}" class="image">
  <div class="description">
  <p class="text">${breedInfo.description}</p>
  <p class="text"><b>Temperament:</b> ${breedInfo.temperament}</p>
  </div>
  </div>
  `
  catInfo.innerHTML = markup;
}
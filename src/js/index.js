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
  const chosenBreed = event.currentTarget.value;
  showLoad();
  try {
    fetchCatByBreed(chosenBreed)
      .then(renderCatCard)
      .catch(showError);
  } finally {
    hideLoad();
  }
}

function renderCatCard(json) {
  const { name, description, temperament } = json[0].breeds[0];
  const url = json[0].url;
  const header = `<h2 class="header">${name}</h2>`;
  const image = `<img src="${url}" alt="Cat breed ${name}" class="image">`;
  const descriptionText = `<p class="text">${description}</p>`;
  const temperamentText = `<p class="text"><b>Temperament:</b> ${temperament}</p>`;
  const markup = `
    ${header}
    <div class="card">
      ${image}
      <div class="description">
        ${descriptionText}
        ${temperamentText}
      </div>
    </div>`;
  catInfo.innerHTML = markup;
}


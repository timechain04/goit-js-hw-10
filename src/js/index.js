import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const selectEl = document.querySelector('select.breed-select');
const errorEl = document.querySelector('p.error');
const loadEl = document.querySelector('p.loader');
const catInfo = document.querySelector('div.cat-info');

selectEl.addEventListener('input', onSelectorInput);

fetchBreeds()
  .then(renderSelect)
  .catch(showError)
  .finally(hideLoader);

function renderSelect(json) {
  const optionsMarkup = json.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
  selectEl.innerHTML = optionsMarkup;
  selectEl.value = '';
  selectEl.classList.remove('hidden');
}

function hideLoader() {
  loadEl.classList.add('hidden');
}

function showError() {
  errorEl.classList.remove('hidden');
}

function showLoader() {
  loadEl.classList.remove('hidden');
  errorEl.classList.add('hidden');
  catInfo.innerHTML = '';
}

function onSelectorInput(event) {
  showLoader();
  const chosenBreed = event.currentTarget.value;
  fetchCatByBreed(chosenBreed)
    .then(renderCatCard)
    .catch(showError)
    .finally(hideLoader);
}

function renderCatCard(json) {
  const breedInfo = json[0].breeds[0];
  const { url } = json[0];
  const { name, description, temperament } = breedInfo;

  const markup = `
    <h2 class="header">${name}</h2>
    <div class="card">
      <img src="${url}" alt="Cat breed ${name}" class="image">
      <div class="description">
        <p class="text">${description}</p>
        <p class="text"><b>Temperament:</b> ${temperament}</p>
      </div>
    </div>`;

  catInfo.innerHTML = markup;
}

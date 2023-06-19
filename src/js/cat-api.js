const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_tzTsyw7krgEZLBeoJMmi7g8WFICFdg0xoTjCAS3CjqcXEkmhgwSfsWDDoUqLh3OS';
const SEARCH_CAT = `${BASE_URL}/images/search?limit=1&breed_ids=`;
const searchOptions = { headers: { 'x-api-key': API_KEY },};

export const fetchBreeds = async function () {
  console.info('start fetch');
  const response = await fetch(`${BASE_URL}/breeds`);
  return response.json();
};

export const fetchCatByBreed = async function (breedId) {
  const response = await fetch(`${SEARCH_CAT}${breedId}`, searchOptions);
  return response.json();
};

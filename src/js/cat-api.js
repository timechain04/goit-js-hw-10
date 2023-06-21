const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_tzTsyw7krgEZLBeoJMmi7g8WFICFdg0xoTjCAS3CjqcXEkmhgwSfsWDDoUqLh3OS';
const SEARCH_CAT = `${BASE_URL}/images/search?limit=1&breed_ids=`;
const searchOptions = { headers: { 'x-api-key': API_KEY },};

export const fetchBreeds = function() {
  console.info('start fetch')
  return fetch(`${BASE_URL}/breeds`)
  .then(response => response.json())
}

export const fetchCatByBreed = function(breedId) {
return fetch(`${SEARCH_CAT}${breedId}`,searchOptions)
.then(response => {return response.json()})
}



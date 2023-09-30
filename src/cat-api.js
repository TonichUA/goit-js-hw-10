export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  const apiKey =
    'live_M48aJekzZaAAQ1CiwVsraYPyYiMNniiAtf1aRxQSYHrSmj4SJsftInFEjsvp1G0I';

  return fetch(`${url}?api_key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(error => {
      console.error('Помилка отримання порід:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const urlCat = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  const apiKey =
    'live_M48aJekzZaAAQ1CiwVsraYPyYiMNniiAtf1aRxQSYHrSmj4SJsftInFEjsvp1G0I';
  return fetch(urlCat, {
    method: 'GET',
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Помилка отримання даних про котів:', error);
      throw error;
    });
}

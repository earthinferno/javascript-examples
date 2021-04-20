const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function appendCities(cities) {
  const cityList = cities.map(city => `
   <li>
     <span class="name">${city.city}, ${city.state}</span>
     <span class="population">${city.population}</span>
   </li>`).join('');

  document.querySelector('.suggestions').innerHTML = cityList;
}

function searchCities(e) {
  const regex = new RegExp(e.target.value, 'gi')

  const matched = cities.filter(city => city.city.match(regex) ||  city.state.match(regex) );
  appendCities(matched);
}

const searchInput = document.querySelector('.search');
searchInput.addEventListener('change',searchCities);
searchInput.addEventListener('keyup',searchCities);
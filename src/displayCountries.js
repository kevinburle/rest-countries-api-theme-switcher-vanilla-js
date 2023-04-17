import get from "./getElement.js";
import numberWithCommas from "./formatNumbers.js";
import { hideLoading } from "./toggleLoading.js";

const error = get(".error");
const countriesContainerDOM = get(".countries-container");

const displayCountries = (data) => {
  const countries = data
    .map(({ flag, name, population, region, capital, alpha3Code: code }) => {
      return `<a href="country.html?code=${code}" class="card">
  <img
    src="${flag}"
    alt="${name} flag"
    class="img"
  />
  <footer>
    <h2>${name}</h2>
    <p><span>Population:</span> ${numberWithCommas(population)}</p>
    <p><span>Region:</span> ${region}</p>
    <p><span>Capital:</span> ${capital}</p>
  </footer>
</a>`;
    })
    .join("");
  hideLoading();
  error.textContent = "";
  countriesContainerDOM.innerHTML = countries;
};

export default displayCountries;

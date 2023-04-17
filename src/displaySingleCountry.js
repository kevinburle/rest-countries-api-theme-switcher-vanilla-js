import formatNumbers from "./formatNumbers.js";
import get from "./getElement.js";
import findCountryWithCode from "./findCountryWithCode.js";
import truncateString from "./truncateString.js";

const countryContainerDOM = get(".country-container");

const displaySingleCountry = (data) => {
  // destructuring
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = data;

  //change product title dynamicaly in html file
  document.title = name.toUpperCase();

  // display data
  countryContainerDOM.innerHTML = `<img src="${flag}" alt="${name} flag" class="img" />
<div class="country-info">
  <h2>${name}</h2>
  <div class="wrapper">
    <div class="flex-left">
      <p><span>native name: </span>${nativeName}</p>
      <p><span>population: </span>${formatNumbers(population)}</p>
      <p><span>region: </span>${region}</p>
      <p><span>sub region: </span>${subregion}</p>
      <p><span>capital: </span>${capital}</p>
    </div>
    <div class="flex-right">
      <p><span>top level domain: </span>${topLevelDomain[0]}</p>
      <p><span>currencies: </span>${
        currencies ? currencies[0].name : "unknow"
      }</p>
      <p><span>languages: </span>${
        languages
          ? languages
              .map((language) => {
                return language.name;
              })
              .join(", ")
          : "unknow"
      }</p>
    </div>
  </div>
  <div class="border-countries">
    <h3>Border countries:</h3>
    <div class="list">
      ${
        borders
          ? borders
              .map(
                (border) =>
                  `<a href="country.html?code=${border}" class="btn">${truncateString(
                    findCountryWithCode(border).name,
                    10
                  )}</a>`
              )
              .join("")
          : "<p>unknow</p>"
      }
    </div>
  </div>
</div>`;
};

export default displaySingleCountry;

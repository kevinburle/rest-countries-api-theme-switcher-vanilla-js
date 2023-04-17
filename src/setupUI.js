import paginate from "./paginate.js";
import displayButtons from "./displayPaginationButtons.js";
import displayCountries from "./displayCountries.js";
import crossFilter from "./crossFilter.js";
import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const error = get(".error");
const countriesContainerDOM = get(".countries-container");
const btnContainer = get(".pagination-bar");

// display 12 countries per page by default
const CountriesPerPage = 12;

const setupUI = (data, index, filterValue, btnIndex = 0) => {
  const filteredCountries = crossFilter(data, filterValue);

  // if filtered array is empty
  if (!filteredCountries.length) {
    hideLoading();
    error.textContent = "Sorry,No countries Matched Your Search";
    countriesContainerDOM.innerHTML = null;
    btnContainer.innerHTML = null;
    return;
  }

  const btnsArray = displayButtons(
    paginate(filteredCountries, CountriesPerPage),
    index,
    btnIndex
  );

  // display the data
  displayCountries(paginate(filteredCountries, CountriesPerPage)[index]);

  // return in app.js
  return btnsArray;
};

export default setupUI;

// global imports
import "./src/toggleDropdown.js";

// imports
import get from "./src/getElement.js";
import fetchData from "./src/getData.js";
import { setStorageItem, getStorageItem } from "./src/localStorage.js";
import displayRegionFilters from "./src/displayRegionFilters.js";
import setupUI from "./src/setupUI.js";
import setupBtnPagination from "./src/setupButtonPagination.js";
import setTheme from "./src/setTheme.js";
import toggleTheme from "./src/toggleTheme.js";

const form = get(".search-bar");
const input = get('[type="text"]');
const btnContainer = get(".pagination-bar");
const toggleColor = get(".toggle-color");

// first init
const init = async () => {
  const index = 0;
  // fetch data one time when the page is loading
  const countries = await fetchData();
  // store the data to local storage to improve the performance
  setStorageItem("countriesArr", countries);
  // display region filters dropdown
  displayRegionFilters(countries);
  // setup UI with fetched data only for the first init
  setupUI(countries, index);
};

init();

// event listener on the search box
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const value = input.value.toLowerCase();
  // back to index 0 when user type in the search bar
  const index = 0;
  const btnIndex = 0;
  // setup UI with stored data to improve performance
  setupUI(getStorageItem("countriesArr"), index, value, btnIndex);
});

// event listener on the pagination buttons
btnContainer.addEventListener("click", setupBtnPagination);

// enable theme
setTheme();

// toggle theme
toggleColor.addEventListener("click", toggleTheme);

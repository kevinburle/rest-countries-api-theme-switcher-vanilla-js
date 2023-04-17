import get from "./getElement.js";

const dropdownBtn = get(".dropdown-btn");

const crossFilter = (dataArr, searchInput) => {
  let filteredCountries;
  const regionSelected = dropdownBtn.dataset.selected;
  // if filter value is falsy && no filter are applied in the search box, return entire array
  if (regionSelected === "All" && !searchInput) {
    filteredCountries = dataArr;
  } else if (regionSelected === "All") {
    filteredCountries = dataArr.filter((countries) => {
      return countries.name.toLowerCase().includes(searchInput);
    });
  } else {
    filteredCountries = dataArr
      .filter((countries) => {
        return countries.region === regionSelected;
      })
      .filter((countries) => {
        return countries.name.toLowerCase().includes(searchInput);
      });
  }

  return filteredCountries;
};

export default crossFilter;

import get from "./getElement.js";

const dropdownOptionsDOM = get(".dropdown-options");

const displayRegionFilters = (data) => {
  const uniqueRegions = ["All", ...new Set(data.map((country) => country.region))];
  dropdownOptionsDOM.innerHTML = uniqueRegions
    .map((region) => {
      return `<li><a href="#" class="link" data-id="${region}">${region}</a></li>`;
    })
    .join("");
};

export default displayRegionFilters;

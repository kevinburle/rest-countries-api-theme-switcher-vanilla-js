import { getStorageItem } from "./localStorage.js";

const findCountryWithCode = (code) => {
  return getStorageItem("countriesArr").find((country) => {
    return country.alpha3Code === code;
  });
};

export default findCountryWithCode;

import displaySingleCountry from "./src/displaySingleCountry.js";
import findCountryWithCode from "./src/findCountryWithCode.js";
import get from "./src/getElement.js";
import setTheme from "./src/setTheme.js";
import toggleTheme from "./src/toggleTheme.js";

const toggleColor = get(".toggle-color");

const setCountry = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  displaySingleCountry(findCountryWithCode(code));
};

setCountry();

// enable theme
setTheme();

// toggle theme
toggleColor.addEventListener("click", toggleTheme);

export default setCountry;

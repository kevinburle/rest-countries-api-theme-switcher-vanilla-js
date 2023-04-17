import { getStorageItem, setStorageItem } from "./localStorage.js";
import setTheme from "./setTheme.js";

const toggleTheme = () => {
  if (getStorageItem("theme") === "dark-theme") {
    localStorage.removeItem("theme");
  } else {
    setStorageItem("theme", "dark-theme");
  }
  setTheme();
};

export default toggleTheme;

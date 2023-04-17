import { getStorageItem, setStorageItem } from "./localStorage.js";

const setTheme = () => {
  if (getStorageItem("theme") === "dark-theme") {
    document.documentElement.classList.add("dark-theme");
  } else {
    document.documentElement.classList.remove("dark-theme");
  }
};

export default setTheme;

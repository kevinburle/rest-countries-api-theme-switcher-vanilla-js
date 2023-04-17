import { getStorageItem } from "./localStorage.js";
import get from "./getElement.js";
import setupUI from "./setupUI.js";

const dropdownBtn = get(".dropdown-btn");
const input = get('[type="text"]');

const dropdownFiltering = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    dropdownBtn.dataset.selected = e.target.dataset.id;
    const value = input.value;
    const index = 0;
    const btnIndex = 0;

    if (e.target.dataset.id === "All") {
      dropdownBtn.firstChild.textContent = "Region: All";
    } else {
      dropdownBtn.firstChild.textContent = `Region: ${e.target.dataset.id}`;
    }

    setupUI(getStorageItem("countriesArr"), index, value, btnIndex);
  }
};

export default dropdownFiltering;

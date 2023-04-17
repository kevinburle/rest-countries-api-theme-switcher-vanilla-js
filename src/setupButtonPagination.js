import setupUI from "./setupUI.js";
import get from "./getElement.js";
import { getStorageItem } from "./localStorage.js";

const input = get('[type="text"]');
const dropdownBtn = get(".dropdown-btn");
let dataSelected = dropdownBtn.dataset.selected;
// init value
let index = 0;
let btnIndex = 0;

// buttons per page = 5 by default
const buttonsPerPage = 5;

const setupBtnPagination = (e) => {
  e.preventDefault();
  // read input value on search box
  const value = input.value.toLowerCase();

  // if dropdown value is changed, reset index, btnIndex
  if (dataSelected !== dropdownBtn.dataset.selected) {
    index = 0;
    btnIndex = 0;
    dataSelected = dropdownBtn.dataset.selected;
  }

  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("prev-page")) {
    btnIndex !== 0 && index % buttonsPerPage === 0 ? btnIndex-- : btnIndex;
    index--;
  }
  if (e.target.classList.contains("next-page")) {
    (index + 1) % buttonsPerPage === 0 ? btnIndex++ : btnIndex;
    index++;
  }
  if (e.target.classList.contains("first-page")) {
    index = 0;
    btnIndex = 0;
  }
  if (e.target.classList.contains("switch-pagination-next")) {
    btnIndex++;
    index = buttonsPerPage * btnIndex;
  }
  if (e.target.classList.contains("switch-pagination-prev")) {
    btnIndex--;
    index = buttonsPerPage * btnIndex;
  }
  if (e.target.classList.contains("last-page")) {
    // return from setupUI to get the length of the array
    const setupBtnsArray = setupUI(
      getStorageItem("countriesArr"),
      index,
      value,
      btnIndex
    );

    btnIndex = setupBtnsArray.length - 1;
    const lastArr = setupBtnsArray[btnIndex];
    const itemsLastArray = lastArr.length;
    index = buttonsPerPage * btnIndex + (itemsLastArray - 1);
  }

  // setup UI with stored data to improve performance
  setupUI(getStorageItem("countriesArr"), index, value, btnIndex);
};

export default setupBtnPagination;

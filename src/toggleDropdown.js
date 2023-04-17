import get from "./getElement.js";
import dropdownFiltering from "./setDropdowFiltering.js";

const dropdownBtn = get(".dropdown-btn");
const dropdownOptions = get(".dropdown-options");

dropdownBtn.addEventListener("click", () => {
  if (dropdownOptions.classList.contains("show")) {
    dropdownOptions.style.height = "0px";
    dropdownOptions.classList.remove("show");
    dropdownOptions.removeEventListener("click", dropdownFiltering);
  } else {
    // calculate height dropdown
    const links = [...document.querySelectorAll(".link")];
    dropdownOptions.style.height = `${links.length * 31.59 + 32}px`;
    dropdownOptions.classList.add("show");
    dropdownOptions.addEventListener("click", dropdownFiltering);
  }
});

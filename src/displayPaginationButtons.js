import get from "./getElement.js";
import paginate from "./paginate.js";

const btnContainer = get(".pagination-bar");

const displayButtons = (pages, activeIndex, btnIndex = 0) => {
  const paginationBtns = pages.map((_, pageIndex) => {
    return `<a href="#" class="${
      activeIndex === pageIndex
        ? "pagination-btn page-btn selected"
        : "pagination-btn page-btn"
    }" data-index="${pageIndex}">${pageIndex + 1}</a>`;
  });

  // buttons per page = 5 by default
  const buttonsPerPage = 5;

  const btnsArray = [...paginate(paginationBtns, buttonsPerPage)];

  const btns = btnsArray[btnIndex];

  // if next array exist, display 3 dot
  if (btnsArray[btnIndex + 1]) {
    btns.push(
      `<a href="#" class="pagination-btn switch-pagination-next">...</a>`
    );
  }
  // if prev array exist, display 3 dot
  if (btnsArray[btnIndex - 1]) {
    btns.unshift(
      `<a href="#" class="pagination-btn switch-pagination-prev">...</a>`
    );
  }

  // let's unshift the arrows in the begin of the array
  btns.unshift(
    `<a href="#" class="pagination-btn ${
      activeIndex === 0 ? "disabled" : ""
    } first-page"
    ><i class="fa-solid fa-angles-left"></i
  ></a>`,
    `<a href="#" class="pagination-btn ${
      activeIndex === 0 ? "disabled" : ""
    } prev-page"
  ><i class="fas fa-solid fa-chevron-left"></i
  ></a>`
  );
  // let's push the arrows in the end of the array
  btns.push(
    `<a href="#" class="pagination-btn ${
      activeIndex === paginationBtns.length - 1 ? "disabled" : ""
    } next-page"
    ><i class="fas fa-solid fa-chevron-right"></i
  ></a>`,
    `<a href="#" class="pagination-btn ${
      activeIndex === paginationBtns.length - 1 ? "disabled" : ""
    } last-page"
    ><i class="fa-solid fa-angles-right"></i
  ></a>`
  );

  // display buttons DOM
  btnContainer.innerHTML = btns.join("");

  // return in setupUI
  return paginate(paginationBtns, buttonsPerPage);
};

export default displayButtons;

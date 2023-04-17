import get from "./getElement.js";

const loading = get(".loading");

const hideLoading = () => {
  loading.classList.add("hide-loading");
};
const showLoading = () => {
  loading.classList.remove("hide-loading");
};

export { hideLoading, showLoading };

import { showLoading } from "./toggleLoading.js";
const url = "../data.json";

const fetchData = async () => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;

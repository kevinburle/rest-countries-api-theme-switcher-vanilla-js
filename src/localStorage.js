const setStorageItem = (keyname, data) => {
  localStorage.setItem(keyname, JSON.stringify(data));
};

const getStorageItem = (keyname) => {
  return JSON.parse(localStorage.getItem(keyname));
};

export { setStorageItem, getStorageItem };

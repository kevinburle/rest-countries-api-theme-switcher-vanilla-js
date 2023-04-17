const truncateString = (str, n) => {
  return str.length > n ? str.slice(0, n - 1) + "&hellip;" : str;
};

export default truncateString;

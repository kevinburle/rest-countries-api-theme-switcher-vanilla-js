const paginate = (data, itemsPerPage) => {
  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  // sequence generator
  const pagesRange = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return pagesRange;
};

export default paginate;

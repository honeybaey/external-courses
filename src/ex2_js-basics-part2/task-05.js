const findMax = (arr) => {
  return arr.reduce((prevItem, nextItem) => (prevItem > nextItem ? prevItem : nextItem));
};

module.exports = findMax;

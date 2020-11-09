const findMax = (arr) => {
  return arr.reduce((x, y) => (x > y ? x : y));
};

module.exports = findMax;

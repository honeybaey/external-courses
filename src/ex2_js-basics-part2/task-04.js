const isEqualItems = (arr) => {
  const result = arr.filter((el, i, arr) => arr.indexOf(el) !== i);
  if (result.length) {
    return true;
  } else {
    return false;
  }
};

module.exports = isEqualItems;

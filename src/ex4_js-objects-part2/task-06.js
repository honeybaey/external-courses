const capitalizeEachFirstChar = (str) => {
  let arr = str.split(" ");
  return arr
    .map((elem) => {
      return elem.charAt(0).toUpperCase() + elem.slice(1);
    })
    .join(" ");
};

module.exports = capitalizeEachFirstChar;

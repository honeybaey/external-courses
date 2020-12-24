const getExtendedString = (parentStr, childrenStr, index) => {
  let str = parentStr.split(" ");
  let newStr = `${str.slice(0, index + 1)} ${childrenStr} ${str.slice(
    index + 1,
    str.length
  )}`;

  return newStr.split(",").join(" ");
};

module.exports = getExtendedString;

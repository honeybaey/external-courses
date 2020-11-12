const fixLengthStr = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num - 1) + "…";
  }
};

module.exports = fixLengthStr;

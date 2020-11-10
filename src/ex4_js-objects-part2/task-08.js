const toLowerCamelCase = (str) => {
  let arr = str
    .toLowerCase()
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");
  return arr.charAt(0).toLowerCase() + arr.slice(1);
};

module.exports = toLowerCamelCase;

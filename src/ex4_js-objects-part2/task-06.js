const capitalizeEachFirstChar = (str) => {
  if (/[^a-zа-яё\s]+/i.test(str)) {
    return "Введите корректную строку";
  } else {
    let arr = str.split(" ");
    return arr
      .map((elem) => {
        return elem.charAt(0).toUpperCase() + elem.slice(1);
      })
      .join(" ");
  }
};

module.exports = capitalizeEachFirstChar;

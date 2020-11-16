const showArr = (arr) => {
  arr.forEach((item) => console.log(item));
  console.log(`Всего: ${arr.length}`);
};

showArr(array);

module.exports = showArr;

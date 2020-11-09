const array = [1, 124, 15, 155, 66];

const showArr = (arr) => {
  arr.forEach((item) => console.log(item));
  console.log(`Всего: ${arr.length}`);
};

showArr(array);

module.exports = showArr;

const findCharNums = (arr) => {
  let newArr = [];
  let even = 0;
  let odd = 0;
  let zero = 0;
  arr.forEach((item) => {
    if (item === null || item === undefined) {
      return;
    } else if (item % 2 === 0 && item !== 0) {
      even++;
    } else if (item % 2 !== 0) {
      odd++;
    } else {
      zero++;
    }
  });
  return (newArr = [even, odd, zero]);
};

module.exports = findCharNums;

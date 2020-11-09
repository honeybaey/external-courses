const arr1 = [1, 2, null];

const findCharNums = (arr) => {
  let newArr = [];
  let even = 0;
  let odds = 0;
  let zero = 0;
  arr.map((item) => {
    if (item === null || undefined) {
      return;
    } else if (item % 2 === 0 && item !== 0) {
      even++;
    } else if (item % 2 !== 0) {
      odds++;
    } else {
      zero++;
    }
  });
  return (newArr = [even, odds, zero]);
};

findCharNums(arr1);

module.exports = findCharNums;

const customFilter = (array, callback) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

const customSlice = (arr, begin = 0, end = arr.length) => {
  const from = begin < 0 ? begin + arr.length : begin;
  const to = end < 0 ? end + arr.length : end;

  return customFilter(arr, (_, i) => i >= from && i < to);
};

module.exports = customSlice;

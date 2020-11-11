const cloneMap = (array, callback) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
};

module.exports = cloneMap;

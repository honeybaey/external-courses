const customReduce = (array, callback, initialValue) => {
  let previousValue = initialValue || array[0];
  let i = initialValue ? 0 : 1;

  for (; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
};

module.exports = customReduce;

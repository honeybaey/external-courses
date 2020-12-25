const customReduce = (array, callback, initialValue) => {
  let previousValue = initialValue || array[0];
  const start = initialValue ? 0 : 1;

  for (let i = start; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
};

module.exports = customReduce;

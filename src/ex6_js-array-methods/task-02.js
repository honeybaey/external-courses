const arr = [1, -1, 2, -2, 3];

const cloneSome = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(arr[i], i, array)) {
      return true;
    }
  }
  return false;
};

module.exports = cloneSome;

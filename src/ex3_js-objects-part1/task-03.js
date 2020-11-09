const checkForProp = (str, obj) => {
  for (let key in obj) {
    if (key === str) return true;
  }
  return false;
};

module.exports = checkForProp;

const cloneObj = (obj) => {
  const newObj = Object.assign({}, obj);
  return newObj;
};

module.exports = cloneObj;

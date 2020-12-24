const searchInPrototype = (propName, obj) => {
  if (propName in Object.getPrototypeOf(obj)) {
    return Object.getPrototypeOf(obj)[propName];
  }
};

module.exports = searchInPrototype;

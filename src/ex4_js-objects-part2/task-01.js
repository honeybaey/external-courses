const searchInPrototype = (propName, obj) => {
  if (propName in obj.__proto__) {
    return obj.__proto__[propName];
  }
};

module.exports = searchInPrototype;

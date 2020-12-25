const showObjProps = (obj) => {
  for (key in obj) {
    console.log(`key: ${key}; value: ${obj[key]}`);
  }
};

module.exports = showObjProps;

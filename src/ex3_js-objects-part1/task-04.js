const addMissingProp = (str, obj) => {
  if (!(str in obj)) {
    obj[str] = "new";
  }
  return obj;
};

module.exports = addMissingProp;

const addMissingProp = (str, obj) => {
  const newObj = { ...obj };
  if (!(str in obj)) {
    return newObj[str] = "new";
  }
  return newObj;
};

module.exports = addMissingProp;

const showType = (arg) => {
  if (typeof arg === "string") {
    return "string";
  } else if (typeof arg === "number") {
    return "number";
  } else {
    return undefined;
  }
};

module.exports = showType;

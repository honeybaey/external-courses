const showType = (arg) => {
  if (typeof arg === "number" || typeof arg === "string") {
    return typeof arg;
  } else {
    return;
  }
};

module.exports = showType;

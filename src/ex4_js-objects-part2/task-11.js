const countChar = (str) => {
  const newStr = str
    .toLowerCase()
    .split("")
    .reduce((prev, next) => ((prev[next] = (prev[next] || 0) + 1), prev), {});

  for (let key in newStr) {
    console.log(`${key}: ${newStr[key]}`);
  }
};

module.exports = countChar;

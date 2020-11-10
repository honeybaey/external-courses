const randomNum = () => {
  const random = 0 + Math.random() * (100 + 1 - 0);
  return Math.floor(random);
};

module.exports = randomNum;

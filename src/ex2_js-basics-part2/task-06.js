const isSimple = (x) => {
  if (x < 2 || x > 1000) {
    return "Данные неверны";
  } else if (x === 2) {
    return `Число ${x} - простое число`;
  }

  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return `Число ${x} - составное число`;
    }
  }
  return `Число ${x} - простое число`;
};

module.exports = isSimple;

const calc = {
  state: 0,

  add: function (x = 0) {
    calc.state += x;
    return calc.add;
  },
  subtract: function (x = 0) {
    calc.state -= x;
    return calc.subtract;
  },
  divide: function (x = 1) {
    calc.state /= x;
    return calc.divide;
  },
  multiply: function (x = 1) {
    calc.state *= x;
    return calc.multiply;
  },
  getResult: function () {
    return calc.state;
  },
  reset: function () {
    return (calc.state = 0);
  },
};

const Calculator = calc;

module.exports = Calculator;

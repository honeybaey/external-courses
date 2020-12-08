function Calc() {
  this.state = 0;

  this.add = function (x) {
    if (arguments.length === 0) {
      this.state;
    } else {
      this.state += x;
    }
    return this;
  };

  this.subtract = function (x) {
    if (arguments.length === 0) {
      this.state;
    } else {
      this.state -= x;
    }
    return this;
  };

  this.divide = function (x) {
    if (arguments.length === 0) {
      this.state;
    } else {
      this.state /= x;
    }
    return this;
  };

  this.multiply = function (x) {
    if (arguments.length === 0) {
      this.state;
    } else {
      this.state *= x;
    }
    return this;
  };

  this.getResult = function () {
    return this.state;
  };

  this.reset = function () {
    this.state = 0;
    return this;
  };

  this.setState = function (x) {
    this.state = x;
    return this;
  };

  this.fetchData = function (callback) {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => callback(json));
    return this.setState(500);
  };
}

const showResponse = (json) => {
  console.log(json);
};

let Calculator = new Calc();

Calculator.fetchData(showResponse);

module.exports = new Calc();

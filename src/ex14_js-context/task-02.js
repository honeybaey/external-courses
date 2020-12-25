function Hangman(word) {
  if (typeof word === "undefined" || word.length === 0) {
    console.log("Invalid word");
    return (this.state = []);
  }
  this.word = word;
  this.state = word.replace(/./g, "_").split("");
  this.errors = 6;
  this.wrong = [];

  this.guess = function (letter) {
    if (this.state != []) {
      const caseIndependentLetter = letter.toLowerCase();

      if (this.word.indexOf(caseIndependentLetter) >= 0) {
        this.state = this.state.map((dash, i) =>
          this.word[i] == caseIndependentLetter ? caseIndependentLetter : dash
        );

        this.state.join("") == this.word
          ? console.log(`${this.state.join("")} | You won!`)
          : console.log(this.state.join(""));
      } else {
        this.errors--;
        this.wrong.push(caseIndependentLetter);

        this.errors > 0
          ? console.log(
              `wrong letter, errors left ${this.errors} | ${this.wrong}`
            )
          : console.log("You lose!");
      }
      return this;
    }
  };

  this.getGuessedString = function () {
    return this.state.join("");
  };

  this.getErrorsLeft = function () {
    return this.errors;
  };

  this.getWrongSymbols = function () {
    return this.wrong;
  };

  this.getStatus = function () {
    console.log(`${this.getGuessedString()} | errors left ${this.errors}`);
    return this;
  };

  this.startAgain = function (newWord) {
    this.word = newWord;
    this.state = newWord.replace(/./g, "_").split("");
    this.errors = 6;
    this.wrong = [];
    return this;
  };
}

module.exports = new Hangman("webpurple");

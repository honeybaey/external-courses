function Hangman(word) {
  this.word = word;
  this.state = word.replace(/./g, "_").split("");
  this.errors = 6;
  this.wrong = [];

  this.guess = function (letter) {
    const caseIndependentLetter = letter.toLowerCase();

    if (this.word.indexOf(caseIndependentLetter) >= 0) {
      this.state = this.state.map((_, i) =>
        this.word[i] == caseIndependentLetter ? caseIndependentLetter : _
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

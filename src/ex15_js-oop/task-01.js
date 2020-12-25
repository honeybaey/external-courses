function Candy(name, weight, price) {
  this.name = name;
  this.weight = weight;
  this.price = price;
}

const rafaello = new Candy("Rafaello", 150, 350);
const mentos = new Candy("Mentos", 220, 300);
const bonpari = new Candy("BonPari", 180, 200);
const kinder = new Candy("Kinder", 120, 250);

function Gift() {
  const candyPackage = [];
  this.addCandyToGift = function (candy) {
    candyPackage.push(candy);
    candyPackage.sort((a, b) => a.price - b.price);
  };

  this.getFullWeight = function () {
    let fullWeight = 0;
    candyPackage.forEach((candy) => (fullWeight += candy.weight));
    console.log(fullWeight);
  };

  this.searchCandy = function (name) {
    if (typeof name !== "string" || name.length === 0) {
      console.log("Enter a valid name");
    } else {
      const foundCandy = candyPackage.find(
        (candy) => name.toLowerCase().trim() === candy.name.toLowerCase()
      );

      if (foundCandy) {
        console.log(foundCandy);
      } else {
        console.log("Not found");
      }
    }
  };
}

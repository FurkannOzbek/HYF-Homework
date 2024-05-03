// Variables for candy prices, amount to spend, summary of candies

const candyPriceSweet = 0.5;
const candyPriceChocolate = 0.7;
const candyPriceToffee = 1.1;
const candyPriceChewing = 0.03;
let sum = 0;
const amountToSpend = Math.floor(Math.random() * 100);
// This function calculates price of the candy & push our candy price to array
function addCandy(candyType, weight) {
  if (candyType === "sweet") {
    priceCandy = weight * candyPriceSweet;
  } else if (candyType === "chocolate") {
    priceCandy = weight * candyPriceChocolate;
  } else if (candyType === "toffee") {
    priceCandy = weight * candyPriceToffee;
  } else if (candyType === "chewing-gum") {
    priceCandy = weight * candyPriceChewing;
  } else {
    priceCandy = console.log("Wrong parameter"); // if there is something else we get different than our parameters this error message will be shown
  }
  sum = sum + priceCandy;
  return sum;
}
// Function that calculates whether user can buy more candy or not
function canBuyMoreCandy() {
  if (amountToSpend > sum) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}
addCandy("sweet", 20);
addCandy("toffee", 40);
addCandy("chocolate", 40);
// addCandy("asd", 70); // This gives error message to console

// Logging out all the necesarry info
console.log(`Total amount = ${sum}`);
console.log(`Money in the pocket = ${amountToSpend}`);

// Calling the function to see if user can get more candy
canBuyMoreCandy();

// Variables for candy prices, amount to spend, summary of candies

const candyPriceSweet = 0.5;
const candyPriceChocolate = 0.7;
const candyPriceToffee = 1.1;
const candyPriceChewing = 0.03;
let boughtCandyPrices = [];
let sum = 0;
const amountToSpend = Math.random() * 100;
// This function calculates price of the candy & push our candy price to array
function addCandy(candyType, weight) {
  if (candyType === "sweet") {
    priceCandy = weight * candyPriceSweet;
    boughtCandyPrices.push(priceCandy);
  } else if (candyType === "chocolate") {
    priceCandy = weight * candyPriceChocolate;
    boughtCandyPrices.push(priceCandy); // Here I have tried to put push method out of all if statements but if we get wrong parameter it was also pushing the wrong parameter. So I had to put 1 by 1.
  } else if (candyType === "toffee") {
    priceCandy = weight * candyPriceToffee;
    boughtCandyPrices.push(priceCandy);
  } else if (candyType === "chewing-gum") {
    priceCandy = weight * candyPriceChewing;
    boughtCandyPrices.push(priceCandy);
  } else {
    priceCandy = console.log("Wrong parameter"); // if there is something else we get different than our parameters this error message will be shown
  }
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
// addCandy("asd", 70); // This gives error message to console

// For loop for sum the prices in the array
for (i = 0; i < boughtCandyPrices.length; i++) {
  sum = sum + boughtCandyPrices[i];
}
// Logging out all the necesarry info
console.log(`The array of candy prices = ${boughtCandyPrices}`);
console.log(`Total amount = ${sum}`);
console.log(`Money in the pocket = ${amountToSpend}`);

// Calling the function to see if user can get more candy
canBuyMoreCandy();

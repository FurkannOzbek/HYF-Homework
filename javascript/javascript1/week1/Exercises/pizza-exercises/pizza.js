console.log("I love pizza");

const favPizza = "Meat Lover";
const pricePizza = 50;
let amountPizza = 3;
let familyPizza = true;

let totalPrice =
  amountPizza * pricePizza + familyPizza * pricePizza * amountPizza;

console.log(
  "New pizza order:" +
    amountPizza +
    "x " +
    "Family Size=" +
    familyPizza +
    " " +
    favPizza +
    ".Total cost for the order is:" +
    totalPrice
);

// let numberIntoArray = [];
// let cardType;
// function getCardInfo(number) {
//   numberIntoArray = String(number).split("");
//   const startNumber = numberIntoArray[0];
//   if (startNumber == 3) {
//     cardType = "American Express";
//   } else if (startNumber == 4) {
//     cardType = "Visa  ";
//   } else if (startNumber == 5) {
//     cardType = "Master Card";
//   } else if (startNumber == 6) {
//     cardType = "Discover Card  ";
//   } else {
//     cardType = "Unknown";
//   }
//   console.log(`Credit card type is = ${cardType} `);
// }
// getCardInfo(4781321334789876); // 'visa'

// Regex version

const creditTypes = [
  { name: "Visa", pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ },
  {
    name: "MasterCard",
    pattern:
      /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
  },
  { name: "American Express", pattern: /^3[47][0-9]{13}$/ },
  { name: "Discover", pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
];

function getCardInfo(number) {
  for (const cardInfo of creditTypes) {
    if (cardInfo.pattern.test(number)) {
      return cardInfo.name;
    }
  }
  return "Unknown";
}
console.log(getCardInfo(4111111111111111)); // 'visa'
console.log(getCardInfo(5500000000000004)), // MasterCard
  console.log(getCardInfo(340000000000009)), // American Express
  console.log(getCardInfo(6011000000000004)); // Discover

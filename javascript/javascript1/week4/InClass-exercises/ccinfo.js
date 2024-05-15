let numberIntoArray = [];
let cardType;
function getCardInfo(number) {
  numberIntoArray = String(number).split("");
  const startNumber = numberIntoArray[0];
  if (startNumber == 3) {
    cardType = "American Express";
  } else if (startNumber == 4) {
    cardType = "Visa  ";
  } else if (startNumber == 5) {
    cardType = "Master Card";
  } else if (startNumber == 6) {
    cardType = "Discover Card  ";
  } else {
    cardType = "Unknown";
  }
  console.log(`Credit card type is = ${cardType} `);
}
getCardInfo(4781321334789876); // 'visa'

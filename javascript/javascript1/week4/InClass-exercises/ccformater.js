//credit car

// check for 16 digits

function formatCreditCardNumber(number) {
  if (typeof number !== "number" && typeof number !== "string") {
    console.log("Please type numbers");
  } else {
    const numStr = String(number);
    let str = "";
    let count = 0;
    for (const char of numStr) {
      str += char;
      count++;
      // Add a space after every fourth character, except after the last character
      if (count % 4 === 0 && count !== numStr.length) {
        str += " ";
      }
    }
    return str;
  }
}

const formattedCreditCardObject = formatCreditCardNumber(2567721314124123123);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",

}
*/

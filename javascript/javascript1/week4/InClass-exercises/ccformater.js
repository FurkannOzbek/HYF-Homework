//credit car

// check for 16 digits

let k = 0;

function formatCreditCardNumber(number) {
  if (typeof number !== "number") {
    console.log("Please type numbers");
  } else {
    const numbersIntoArray = String(number).split("");
    let str = "";
    for (i = 0; i < numbersIntoArray.length; i++) {
      console.log(i);
      if (i % 4 === 0 && i !== 0) {
        //   numbersIntoArray.splice(numbersIntoArray[i + k], 0, " ");
        str += " " + numbersIntoArray[i];
        // k = k + 1;
      } else {
        str += numbersIntoArray[i];
      }
    }
    return str;
  }
  //numbersIntoArray = numbersIntoArray.join("");
  //   return numbersIntoArray;
}

const formattedCreditCardObject = formatCreditCardNumber(123456789412423);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",

}
*/

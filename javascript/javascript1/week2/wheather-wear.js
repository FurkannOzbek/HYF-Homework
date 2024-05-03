// Create a function (that you have to name) that has temperature as parameter. Based on the temperature it should return a string with
//  what the user should wear. You decide what the user should wear based on the temperature.

function dressCode(tempature) {
  if (tempature <= 0) {
    return "You should wear jacket or winter coat, boots and thick clothes";
  } else if (tempature <= 10) {
    return " Still cold wear thick clothes";
  } else if (tempature <= 20) {
    return "It is little warmer you can wear less thick clothes";
  } else if (tempature <= 30) {
    return "Now getting there, It iss time for t-shirt and shorts";
  } else if (tempature <= 40) {
    return "Dont worry , most likely wont happen in Denmark in 20 years";
  } else if (tempature > 40) {
    return "Too hot to wear anything";
  } else {
    return "Tempature format is not right";
  }
}

console.log(dressCode(35)); // Output : Dont worry , most likely wont happen in Denmark in 20 years
console.log(dressCode("Any Kind of String")); // Output : Tempature format is not right

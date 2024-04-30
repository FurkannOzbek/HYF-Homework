// Flight booking fullname function

// When a user books a flight they write their firstname and surname, but when the ticket is printed a fullname should be displayed.

// Created a function which generate a full name from firstName, surname and useFor
function getFullName(firstName, surname, useFormalName, isMale) {
  // First statement is checking whether given parameters are strings or not and being sure they are not empty
  if (
    typeof firstName && //check parameter type
    typeof surname === "string" && //checks parameter type
    surname.trim().length !== 0 && //removing all the spaces to check if its empty string or not
    firstName.trim().length !== 0 //removing all the spaces to check if its empty string or not
  ) {
    // Second statement is checking if useFormalName parameter is true or false for giving the lord title
    if (useFormalName) {
      // Third statement is checking whether man or woman
      if (!isMale) {
        return `Lord ${firstName} ${surname}`;
      } else {
        return `Lady ${firstName} ${surname}`;
      }
    } else {
      return `${firstName} ${surname}`;
    }
  }
  // If type of firstName and surname parameters are not string or empty strings then returning the error message
  else {
    return "Wrong parameter type";
  }
}
// 4 variables calling the functions has been created to check all the scenarios
const fullname1 = getFullName("Morgan", "Freeman", true, true);
const fullname2 = getFullName("Megan", "Fox", true, false);
const fullname3 = getFullName("Rihanna", true, false);
const fullname4 = getFullName("Clint", 4, true, false);

// Loging out the variables
console.log(fullname1); // Output will be : Lord Morgan Freeman
console.log(fullname2); // Output will be : Lady Megan Fox
console.log(fullname3); // Output will be : Wrong parameter type because surname string is empty
console.log(fullname4); // Output will be : Wrong parameter type because surname is not a string

const dogYearOfBirth = 2020;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;

// lets count 7 human years is equal to 1 dog year

const dogYear = dogYearFuture - dogYearOfBirth;
// Under this line we are checking if we should show years in dog years or human years and for each statement we have different console logs

if (shouldShowResultInDogYears === true) {
  console.log(
    "Your dog will be " + dogYear * 7+ " dog years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture
  );
}

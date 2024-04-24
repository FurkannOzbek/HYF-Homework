// Variables we defined for the task
const pHouseDepth = 10;
const pHouseHeight = 10;
const pHouseWidth = 8;
const pGardenSize = 100;

const jHouseDepth = 11;
const jHouseWidth = 5;
const jHouseHeight = 8;
const jGardenSize = 70;

// Multipliers given by task for calculating the price
const houseSizeMultiplier1 = 2.5;
const houseSizeMultiplier2 = 1000;
const gardenSizeMultiplier = 300;

// Volume calculator

const volumeInMetersPeter = pHouseHeight * pHouseDepth * pHouseWidth;
const volumeInMetersJulia = jHouseHeight * jHouseDepth * jHouseWidth;

// House real price calculator for Peter & cost of house

const pHousePrice =
  volumeInMetersPeter * houseSizeMultiplier1 * houseSizeMultiplier2 +
  pGardenSize * gardenSizeMultiplier;
const pHouseCost = 2500000;
// Comparing real price and house cost for giving advice to Peter

if (pHousePrice < pHouseCost) {
  console.log("Peter dont buy the house its scam");
} else {
  console.log("Peter it is safe to buy");
}

// House real price calculator for Julia

const jHousePrice =
  volumeInMetersJulia * houseSizeMultiplier1 * houseSizeMultiplier2 +
  jGardenSize * gardenSizeMultiplier;
const jHouseCost = 1000000;
// Comparing real price and house cost for giving advice to Julia

if (jHousePrice < jHouseCost) {
  console.log("Julia dont buy the house its scam");
} else {
  console.log("Julia it is safe to buy");
}

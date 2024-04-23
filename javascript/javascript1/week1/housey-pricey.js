// Variables we defined for the task
const Phouse_depth = 10;
const Phouse_height = 10;
const Phouse_width = 8;
const Pgarden_size = 100;

const Jhouse_depth = 11;
const Jhouse_width = 5;
const Jhouse_height = 8;
const Jgarden_size = 70;

// Volume calculator

const volumeInMetersPeter = Phouse_height * Phouse_depth * Phouse_width;
const volumeInMetersJulia = Jhouse_height * Jhouse_depth * Jhouse_width;

// House real price calculator for Peter

PhousePrice = volumeInMetersPeter * 2.5 * 1000 + Pgarden_size * 300;

// Comparing real price and house cost for giving advice to Peter

if (PhousePrice < 2500000) {
  console.log("Peter dont buy the house its scam");
} else {
  console.log("Peter it is safe to buy");
}

// House real price calculator for Julia

JhousePrice = volumeInMetersJulia * 2.5 * 1000 + Jgarden_size * 300;

// Comparing real price and house cost for giving advice to Julia

if (JhousePrice < 1000000) {
  console.log("Julia dont buy the house its scam");
} else {
  console.log("Julia it is safe to buy");
}

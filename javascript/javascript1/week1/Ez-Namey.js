// Name varriables for first and second name of the startup in arrays

const firstWords = [
  "Omni",
  "Juggernaut",
  "Enigma",
  "Pudge",
  "R2",
  "Phantom",
  "IO",
  "Clockwerk",
  "Invoker",
  "Rubick",
];
const secondWords = [
  "Technologies",
  "Solutions",
  "Analytics",
  "Visions",
  "Innovations",
  "Nerds",
  "Den",
  "Inc.",
  "Core",
  "Collective",
];

// Select random number for first index
const rn1 = Math.floor(Math.random() * 10);

// Select random number for second index
const rn2 = Math.floor(Math.random() * 10);

// Setting startup name by selected indexes
const startupName = firstWords[rn1] + " " + secondWords[rn2];

// Showing startup name in the console
console.log(startupName);

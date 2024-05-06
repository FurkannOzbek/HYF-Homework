// Write a function where you speficy your speed in km/h and how far you have to go in km. The function has to return the time
// it will take to arrive at your destination. The time should be formatted like this: 3 hours and 34 minutes.

//Data

const travelInformation = {
  speed: 120,
  destinationDistance: 879,
};
//Logic
function timeCalculator(travelInfo) {
  const dis = travelInfo.destinationDistance;
  const carSpeed = travelInfo.speed;
  const hours = Math.floor(dis / carSpeed);
  const minutes = Math.floor(((dis % carSpeed) * 60) / carSpeed); //Using an equation for calculating minutes
  return `${hours} hours and ${minutes} minutes`;
}

//Render
const travelTime = timeCalculator(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

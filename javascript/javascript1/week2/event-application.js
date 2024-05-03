// Event application

// Created a function for calculating the day for an event creation
function getEventWeekday(daysLater) {
  // Fetching the system date put into a variable
  const date = new Date();
  // Created an array for the day names because we get the day from system as a number not as a name
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Added variable for current day name
  const currentDay = daysOfWeek[date.getDay()];
  // Added variable for calculating which day the events will be held
  const eventDay = daysOfWeek[(date.getDay() + daysLater) % 7];
  //Logging out current day and event day as text
  console.log(`Today is ${currentDay}`);
  console.log(`Planned event will be on ${eventDay}`);
}

getEventWeekday(36);

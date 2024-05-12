// Extra feature = most used (This was extra feature which I thought 1 hour before i see its an optional :D)

const activities = [];
let timeOfActivities = 0;
let mostUse = 0;
const userLimit = 250;
const today = new Date();

function addActivity(activity, duration) {
  const date = today.toLocaleDateString("en-US");
  let obj = { date, activity, duration };
  activities.push(obj);
}
function showStatus() {
  let numberOfActivities = activities.length;
  if (activities.length === 0) {
    console.log(
      "Please enter some activities before calling showstatus function"
    );
  } else {
    for (i = 0; i < numberOfActivities; i++) {
      timeOfActivities += activities[i].duration;
      // Logic for finding max amount of spend in single app
      if (activities[i].duration > mostUse) {
        mostUse = activities[i].duration;
        mostUsedApp = activities[i].activity;
      }
    }

    if (timeOfActivities > userLimit) {
      console.log("Enough social media");
    } else {
      console.log(
        `You have added ${numberOfActivities}. They amount to ${timeOfActivities} min of usage. Most used app: ${mostUsedApp} with ${mostUse} min `
      );
    }
  }
}

addActivity("Youtube", 30);
addActivity("Instagram", 45);
addActivity("Tiktok", 15);
// addActivity("Snapchat", 60);
// addActivity("Browser", 45);  // these can be reactivated if user limit wants to be triggered
// addActivity("Mail", 50);
// addActivity("Maps", 20);
console.log(activities);
showStatus();

//Data

const seriesDurations = [
  {
    title: "House M.D",
    days: 5,
    hours: 9,
    minutes: 48,
  },
  {
    title: "The Boys",
    days: 1,
    hours: 8,
    minutes: 0,
  },
  {
    title: "The Office",
    days: 3,
    hours: 2,
    minutes: 24,
  },
];
const avgLife = 80 * 12 * 30 * 24 * 60; // 80 years of human life in minutes

// Logic
for (let i = 0; i < seriesDurations.length; i++) {
  const serie = seriesDurations[i];
  const title = serie.title;
  const time = serie.days * 24 * 60 + serie.hours * 60 + serie.minutes;
  const per = ((100 * time) / avgLife).toFixed(3);
  console.log(`${title} took ${per}% of my life`); //Render
}

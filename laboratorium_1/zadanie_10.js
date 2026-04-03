// laczny czas all aktywnosci
// suma wszystkich spalonych kalorii
// filter na aktywnosci minutes > 30min
// tekst z template literals - report
// wskaz naj kaloryczny trening

const activities = [
  { type: "bieg", minutes: 35, calories: 320 },
  { type: "rower", minutes: 50, calories: 410 },
  { type: "spacer", minutes: 20, calories: 90 },
  { type: "siłownia", minutes: 60, calories: 450 }
];

const totalMinutes = activities.reduce((acc, a) => acc + a.minutes, 0);
const totalCalories = activities.reduce((acc, a) => acc + a.calories, 0);
const longActivities = activities.filter(a => a.minutes > 30);

const mostCalories = activities.reduce((max, a) => 
  a.calories > max.calories ? a : max
);

const avgTime = totalMinutes / activities.length;

const raportKoncowy = `
  Łączny czas: ${totalMinutes} min
  Spalone kalorie: ${totalCalories} kcal
  Średni czas treningu: ${avgTime.toFixed(1)} min

  Aktywności powyżej 30 min:
  ${longActivities.map(a => `${a.type} (${a.minutes}min)`).join("\n")}

  Najbardziej kaloryczny trening:
  ${mostCalories.type} (${mostCalories.calories}kcal, ${mostCalories.minutes}min)
`

console.log(raportKoncowy)
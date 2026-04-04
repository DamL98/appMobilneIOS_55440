const schedule = [
  { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false },
  { day: "wtorek", subject: "Bazy danych", room: "online", online: true },
  { day: "czwartek", subject: "Grafika", room: "B03", online: false },
  { day: "piątek", subject: "UX", room: "online", online: true }
];

// zajecia dla danego dnia
const pobierzZajeciaZDnia = (plan, wybranyDzien) => 
  plan.filter(zajecia => zajecia.day.toLowerCase() === wybranyDzien.toLowerCase());

// lista opisow
const formatujOpisZajec = (lista) => 
  lista.map(z => {
    const tryb = z.online ? "niestacjonarne" : "stacjonarne";
    // Dodatkowo uwzględniam godzinę z mojego rozszerzenia
    return `${z.subject}, room: ${z.room}, tryb: ${tryb}`;
  });

// suma zajec w tyg
const policzSumeZajec = (plan) => plan.length;

// filtr po typie zajec online / offline
const filtrujPoTrybie = (plan, czyOnline) => 
  plan.filter(z => z.online === czyOnline);


// raport
const dzienDoSprawdzenia = "czwartek";
const zajeciaDzisiaj = pobierzZajeciaZDnia(schedule, dzienDoSprawdzenia);

console.log(`PLAN STUDENTA`);
console.log(`Liczba wszystkich zajęć w tygodniu: ${policzSumeZajec(schedule)}`);
console.log(`Dzień: ${dzienDoSprawdzenia}`);
console.log(`---------------------------`);

if (zajeciaDzisiaj.length > 0) {
  console.log(formatujOpisZajec(zajeciaDzisiaj).join("\n"));
} else {
  console.log("Brak zajęć w tym dniu.");
}

console.log(`\n FILTR - TYLKO ZAJĘCIA ONLINE `);
const tylkoOnline = filtrujPoTrybie(schedule, true);
console.log(formatujOpisZajec(tylkoOnline).join("\n"));
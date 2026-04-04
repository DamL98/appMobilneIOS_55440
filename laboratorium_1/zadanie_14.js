let todos = [
  { id: 1, title: "Oddać projekt", done: false },
  { id: 2, title: "Przeczytać rozdział", done: true },
  { id: 3, title: "Przygotować prezentację", done: false }
];

const zadaniaStartowe = [
  { id: 1, tresc: "Oddać projekt", wykonane: false, priorytet: "wysoki" },
  { id: 2, tresc: "Przeczytać rozdział", wykonane: true, priorytet: "niski" },
  { id: 3, tresc: "Przygotować prezentację", wykonane: false, priorytet: "średni" }
];

// fn add zadanie
const dodajZadanie = (lista, nowaTresc, prio = "średni") => {
  const noweZadanie = {
    id: Date.now() + Math.random(),
    tresc: nowaTresc,
    wykonane: false,
    priorytet: prio
  };
  return [...lista, noweZadanie];
};

// zmiana status
const oznaczJakoWykonane = (lista, idZadania) => 
  lista.map(zadanie => 
    zadanie.id === idZadania 
      ? { ...zadanie, wykonane: true } 
      : zadanie
  );

// filter niewykonane zadanie
const pobierzNiewykonane = (lista) => 
  lista.filter(zadanie => !zadanie.wykonane);

// clear liste
const wyczyscUkonczone = (lista) => lista.filter(zadanie => !zadanie.wykonane);


const wyswietlListe = (tytul, lista) => {
  console.log(`\n${tytul.toUpperCase()}`);
  lista.forEach(z => {
    const status = z.wykonane ? "[X]" : "[ ]";
    console.log(`${status} (id: ${z.id.toString().slice(-3)}) ${z.tresc}, Priorytet: ${z.priorytet}`);
  });
};


// add zadanie
const poDodaniu = dodajZadanie(zadaniaStartowe, "Kupić bilet na pociąg", "wysoki");
wyswietlListe("Po dodaniu nowego zadania", poDodaniu);

// zmiana statusu id 1 na wykonane
const poAktualizacji = oznaczJakoWykonane(poDodaniu, 1);
wyswietlListe("Zadania po zazn. wykonane", poAktualizacji);

// lista niewykonan
const tylkoDoZrobienia = pobierzNiewykonane(poAktualizacji);
wyswietlListe("Zadania do zrobienia", tylkoDoZrobienia);

console.log("\n oryginalna tablica zmieniona?", zadaniaStartowe === poAktualizacji ? "tak" : "nie");
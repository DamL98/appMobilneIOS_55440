const contacts = [
  { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true },
  { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false },
  { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true }
];

// kontakty z wybranego miasta
const filtrujPoMiescie = (lista, miasto) => 
  lista.filter(k => k.city.toLowerCase() === miasto.toLowerCase());

// ulubiony kontakt
const pobierzUlubione = (lista) => 
  lista.filter(k => k.favorite);

// format imie - telefon
const formatujKontakt = (lista) => 
  lista.map(k => `${k.name} — ${k.phone}`);

// szukanie po fragmencie nazwy
const szukajFraza = (lista, fraza) => 
  lista.filter(k => k.name.toLowerCase().includes(fraza.toLowerCase()));

// rozsz. wlasne
const wyswietlRaport = (naglowek, dane) => {
  console.log(`\n${naglowek}`);
  if (dane.length === 0) {
    console.log("Brak pasujących kontaktów.");
  } else {
    console.log(dane.join("\n"));
  }
};

const ulubioneZKatowic = filtrujPoMiescie(pobierzUlubione(contacts), "Katowice");
wyswietlRaport("Ulubione kontakty z Katowic", formatujKontakt(ulubioneZKatowic));

// szuk. fraza
const szukajFrazy = szukajFraza(contacts, "ak");
wyswietlRaport("Szukanie 'ak' w nazwie", formatujKontakt(szukajFrazy));
const repairs = [
  { id: 1, client: "Anna", device: "laptop", status: "nowe" },
  { id: 2, client: "Piotr", device: "telefon", status: "w trakcie" },
  { id: 3, client: "Ola", device: "tablet", status: "zakończone" }
];

const znajdzZgloszenie = repairs.find(f => f.id === 3)

const updateZgloszenie = repairs.map(u => u.id === 3 ? {...u, status: "w trakcie"} : u)

const wTrakcie = repairs.filter(f => f.status === "w trakcie").length

const wyswietlListe = (opis, lista) => {
  console.log(`\n${opis}`)

  lista.forEach(
        i => console.log(`id:${i.id}, ${i.client}, ${i.device}, ${i.status}`)
    )
}

wyswietlListe("Oryginalna tablica:", repairs)
wyswietlListe("Zaktualizowana tablica:", updateZgloszenie)
console.log("\nZgłoszeina w trakcie w oryginalnej tablicy: " + wTrakcie)
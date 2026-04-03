// 1. value per pozycja price * quantity OK
// 2. suma calego koszyka OK 
// 3. lista tekst np. 2 x Chleb OK
// 4. if sumaKoszyka > próg_rabatu  | zastosuj rabat i oblicz cenę koszyka po
// RAPORT - suma przed rabatem i po

const cart = [
  { name: "Chleb", price: 4.5, quantity: 2 },
  { name: "Ser", price: 9.9, quantity: 1 },
  { name: "Sok", price: 6.2, quantity: 3 }
];

const discountThreshold = 30;
const discountPercent = 10;

const sumaJednejPozycji = cart
    .map(item => ({
        ...item,
        totalPrice: item.price * item.quantity
    }))

// suma pojedynczej pozycji
console.log(`Suma pojedynczej pozycji`)
sumaJednejPozycji.forEach(
    i => {console.log(`Suma za: ${i.name} - ${i.price}zł`)}
)
console.log(`\n`)
// suma cały koszyk
const sumaKoszyk = sumaJednejPozycji.reduce((acc, item) => acc + item.totalPrice, 0)
console.log(`Suma za koszyk: ${sumaKoszyk}zł`)

console.log(`\n`)
// lista tekst kazdej pozycji
const opisPozycji = cart.map(item => ` ${item.quantity} x ${item.name} = ${item.price * item.quantity}zł`)
console.log(`Opis tekst pozycji: \n${opisPozycji}`)
console.log(`\n`)

const discountValue = sumaKoszyk > discountThreshold
    ? sumaKoszyk * (discountPercent / 100)
    : 0

console.log(`Rabat: ${discountValue}zł`)
console.log(`Cena przed rabatem: ${sumaKoszyk}zł`)

const cenaPoRabacie = sumaKoszyk - discountValue
console.log(`Cena po rabacie: ${cenaPoRabacie}zł`)
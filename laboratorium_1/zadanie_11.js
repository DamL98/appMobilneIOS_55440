const tripCosts = [
  { label: "nocleg", amount: 420, paidBy: "Anna" },
  { label: "paliwo", amount: 260, paidBy: "Piotr" },
  { label: "jedzenie", amount: 180, paidBy: "Anna" },
  { label: "bilety", amount: 140, paidBy: "Ola" }
];

const summary = tripCosts.reduce((acc, curr) => {
  // suma calkowita
  acc.totalAmount += curr.amount;

  // wydatki per osoba
  if (!acc.perPerson[curr.paidBy]) {
    acc.perPerson[curr.paidBy] = 0;
  }
  acc.perPerson[curr.paidBy] += curr.amount;

  return acc;
}, { totalAmount: 0, perPerson: {} });

const { totalAmount, perPerson } = summary;
const participants = Object.keys(perPerson);
const sharePerPerson = totalAmount / participants.length;

// najwiecej zaplacil
const topSpender = Object.keys(perPerson).reduce((a, b) => 
  perPerson[a] > perPerson[b] ? a : b
);



// raport
console.log(`Całkowity koszt: ${totalAmount}zł`);
console.log(`Ilość osób: ${participants.length}`);
console.log(`Koszt na osobe: ${sharePerPerson.toFixed(2)}zł`);
console.log(`Najwięcej zapłacił: ${topSpender} ${perPerson[topSpender]}zł`);
console.log("------------------------------------------");

console.log("Indywidualnie:");
participants.forEach(person => {
  const paid = perPerson[person];
  const balance = paid - sharePerPerson;
  
  let status = "";
  if (balance > 0) {
    status = `do zwrotu: ${balance.toFixed(2)}zł`;
  } else if (balance < 0) {
    status = `musi oddać: ${Math.abs(balance).toFixed(2)}zł do ${topSpender}`;
  } else {
    status = "rozliczone na 0";
  }

  console.log(`- ${person}: wydane ${paid}zł, ${status}`);
});
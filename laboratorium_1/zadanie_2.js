const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

const sum = expenses.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
const avg = sum / expenses.length
const maximum = Math.max(...expenses)

const highExpenses = expenses.filter(e => e > 33)

console.log(`Array startowa: ${expenses}`)
console.log(`Suma: ${sum}`)
console.log(`Średnia: ${avg}`)
console.log(`Max: ${maximum}`)
console.log(`Wydatki powyżej 33zł: ${highExpenses}`)
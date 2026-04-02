const shoppingList = [
  { name: "chleb", quantity: 2, urgent: true },
  { name: "mleko", quantity: 1, urgent: false },
  { name: "jajka", quantity: 10, urgent: true },
  { name: "makaron", quantity: 3, urgent: false }
];

console.log("------------------------------");
console.log('Lista zakupów:')
shoppingList.forEach(element => {
    console.log(` Rzecz: ${element.name}, Ilość: ${element.quantity}, Czy pilne?: ${element.urgent == true ? 'Tak' : 'Nie'}`)
})

const urgentItems = shoppingList.filter(item => item.urgent)
const upperCaseName = shoppingList.map(item => item.name.toUpperCase())
const sortedMalejaco = [...shoppingList].sort((a, b) => b.quantity - a.quantity)

console.log("------------------------------");
console.log("Produkty pilne: ")
urgentItems.forEach(item => console.log(item))

console.log("------------------------------");
console.log("Nazwy produktów upperCase:", upperCaseName.join(", "))

console.log("------------------------------");
console.log("Posortowane malejąco:")
sortedMalejaco.forEach(item => {
  console.log(item)
});
console.log("------------------------------");
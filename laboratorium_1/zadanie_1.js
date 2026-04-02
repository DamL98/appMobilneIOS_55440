const user = {
  firstName: "Damian",
  lastName: "Kowalski",
  city: "Katowice",
  age: 27,
  fieldOfStudy: "Informatyka"
};

console.log("Imię: " + user.firstName)
console.log(`Miasto: ${user.city}, Kierunek studiów: ${user.fieldOfStudy}`)

user.age < 18 
    ? console.log(`User nie jest pełnoletni, ma: ${user.age}lat`)
    : console.log(`User jest pełnoletni, ma ${user.age}lat`)

user.hobby = "Bieganie"
console.log(`Ulubione hobby: ${user.hobby}`)
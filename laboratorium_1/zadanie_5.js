const tasks = ["zajęcia", "zakupy", "trening"];

function createDayPlan(name, tasks = ["brak planu"]) {
  console.log("Użytkownik: " + name)
  console.log("Plan dnia: ")
  tasks.forEach(item => console.log(item + ", "))

  console.log("Ilość zadań: " + tasks.length)
}

createDayPlan("Robert", tasks)
console.log("-------------------")
createDayPlan("Michał")
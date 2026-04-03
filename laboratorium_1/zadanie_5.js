const tasks = ["zajęcia", "zakupy", "trening"];

function createDayPlan(name, tasks = []) {
  let opis = `Plan dnia: - ${name}`

  if (tasks.length === 0) {
    return `${opis} \nBrak zaplanowanych zadań.`
  }

  const taskList = tasks
      .map((task, index) => `${index + 1}. ${task}`)
      .join("\n");

  return `${opis}\n${taskList}\n`
}


const pawel = createDayPlan("Paweł", ["Mechanik", "Zakupy"])
console.log(pawel)

const maciek = createDayPlan("Maciek", ["Bieganie", "Sprzatanie", "Egzamin"])
console.log(maciek)

const marekBezListy = createDayPlan("Marek")
console.log(marekBezListy)

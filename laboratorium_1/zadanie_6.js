const movies = [
  { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: false },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false },
  { title: "Inside Out", category: "animation", rating: 8.1, watched: true }
];

const unwatched = movies.filter(movie => !movie.watched)
const rating = movies.filter(movie => movie.rating > 8.0)
const wlasne = movies.filter(movie => movie.category === "sci-fi" && movie.rating > 8.0)

//////////////////////////////////////////////////////////////////

const unwatchedTitles = unwatched.map(movie => movie.title)

const ratingTitles = rating.map(movie => movie.title)

const scifiTitles = movies
  .filter(movie => movie.category === "sci-fi")
  .map(movie => movie.title)

//////////////////////////////////////////////////////////////////

const wyswietlListe = (opis, lista) => {
  console.log(`\n${opis}`)

  lista.forEach((item, index) => console.log(`${index+1} - ${item}`))
}

//////////////////////////////////////////////////////////////////
wyswietlListe("Do obejrzenia: ", unwatchedTitles)
wyswietlListe("Filmy z rating > 8.0: ", ratingTitles)
wyswietlListe("Filmy sci-fi: ", scifiTitles)
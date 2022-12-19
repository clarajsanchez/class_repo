// import { movies } from './data';

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);
  const cleanList = rawList.filter(
    (director, index) => rawList.indexOf(director) === index
  );
  return cleanList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  let count = 0;
  for (let i = 0; i < dramaMovies.length; i++) {
    count++;
  }
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const arrayWithScore = moviesArray.filter(
    (movie) => typeof movie.score === "number"
  );
  const totalScore = arrayWithScore.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue.score;
  },
  0);
  return +(totalScore / moviesArray.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyOfMovies = moviesArray.map((movie) => movie);

  copyOfMovies.sort((a, b) => {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year;
    else return a.title.localCompare(b.title);
  });
  return copyOfMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArray) => {
  return (
    moviesArray
      .map((movie) => movie.title)
      //.filter((movie) => movie.title)
      .sort()
      .slice(0, 20)
  );
};
console.log("6. V-01 - Order ascendiente:");
console.table(orderAlphabetically(movies));
console.log("---------------------------------");

function orderAlphabeticallyRaphaela(moviesArray) {
  // let copy = [...moviesArray];
  let movieTitlesAscending = moviesArray
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((movie) => movie.title)
    .slice(0, 21);

  return movieTitlesAscending;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

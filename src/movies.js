// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (array) => {
    let directorsName = array.map((item) => item.director);
    return directorsName
} 
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (array) {
    const spielbergDramas = array.filter((movie) =>
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
    return spielbergDramas.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (array) =>{
    if(array.length === 0){
        return 0;
    }
    let average = array.reduce((accumulator, currentValue)=>{
        if(currentValue.rate===undefined){
            return  accumulator;
        } else {
            return accumulator + currentValue.rate;
        }
    }, 0);
    const rates = average / array.length;
    return Math.round(rates *100) / 100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate
    const 
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

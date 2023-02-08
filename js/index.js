import { getMovies } from './movies-api.js';
import { MovieCard } from './components/MovieCard.js'

(async () => {
    // This is the entry point for your application. Write all of your code here.
    // Before you can use the database, you need to configure the "db" object 
    // with your team name in the "js/movies-api.js" file.
    
    let movies = await getMovies();
    console.log(movies);
    let target = document.querySelector('.movie-grid')
    for(let movie of movies){
        let newMovie = new MovieCard(movie, target);
    }


})();
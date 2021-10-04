const movies = require('./data/movies.json'); 
 import { fetchWithTimeout } from "./services";

export function fetchMovies(){
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
;}

const moviePromise = fetchMovies();
moviePromise().then( function(results){
    return console.log(results);
});
  
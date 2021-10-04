const movies = require('./data/movies.json'); 
const fetchWithTimeout = require('./services');

export function fetchMovies(){
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction);
;}

const moviePromise = fetchMovies();
moviePromise().then( function(result){
    return console.log(result);
});
  
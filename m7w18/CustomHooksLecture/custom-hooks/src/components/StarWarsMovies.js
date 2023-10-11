import useList from "../hooks/useList";
import List from "./List";

function StarWarsMovies() {
    const listOfMoviesStarWars = useList('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json');
    return ( 
        <List listOfMovies={listOfMoviesStarWars} />
     );
}

export default StarWarsMovies;
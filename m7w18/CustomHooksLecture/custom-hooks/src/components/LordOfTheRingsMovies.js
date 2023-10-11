import useList from "../hooks/useList";
import List from "./List";
function LordOfTheRingsMovies() {
    const listOfMoviesLordOfTheRings = useList('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json');
    return ( 
        <List listOfMovies={listOfMoviesLordOfTheRings} />
     );
}

export default LordOfTheRingsMovies;
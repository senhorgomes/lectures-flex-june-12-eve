import './App.css';
import List from './components/List';
import LordOfTheRingsMovies from './components/LordOfTheRingsMovies';
import StarWarsMovies from './components/StarWarsMovies';
import useList from './hooks/useList';

// Functional components
// Dumb components -> They didn't have any features, or functionality
function App() {
// Rules for hooks:
  // Must be called in a React function/component
  // Must be called at the highest level, but not the top level. Just after the function declaration, and before the return
  // They must start with the word use
  // useCoordinates
  // const {coordinates} = useCoordinates();
  // const {x, y} = useCoordinates();
  // const [coordinates, setCoordinates] = useState({x:0, y:0})
  // document.ready()
  // The empty array tells useEffect to execute the code once and only once the app is loaded
  // Custom hook -> Helpers that use React hooks
  // That doesn't mean that React can't have helpers, they can and they go into their own folder -> helpers
  // useEffect(()=>{
    // Are usually used with fetchs
    // const handleMouseMove = (event) => {
      // we want to capture the event and set the coordinates of our mouse position
      // console.log(event)
      // setCoordinates({x: event.x, y: event.y})
    // }
    // document.addEventListener('mousemove', handleMouseMove)
  // }, [])
  // const listOfMoviesStarWars = useList('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json');
  // const listOfMoviesLordOfTheRings = useList('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json');
  // const listOfMoviesLordOfTheRings = useList();
  return (
    <div className="App App-header">
      {/* We want to capture our mouse coordinates */}
      {/* If we wanted to have a certain event happen only when the document.ready() */}
      {/* How can we do that in React? */}
      {/* useEffect */}
      {/* <h2>Mouse coordinates</h2> */}
      {/* <h3>X: {x}</h3> */}
      {/* <h3>X: {coordinates.x}</h3> */}
      {/* <h3>Y: {y}</h3> */}
      {/* <h3>Y: {coordinates.y}</h3> */}
      {/* <List listOfMovies={listOfMoviesStarWars} /> */}
      <StarWarsMovies />
      <LordOfTheRingsMovies />
      {/* <List listOfMovies={listOfMoviesLordOfTheRings} /> */}
    </div>
  );
}

export default App;

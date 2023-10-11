// import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import useList from "../hooks/useList";
function List(props){
    // Retrieving a list
    // We want to fetch the information once the app is ready
    // const [movies, setMovies] = useState([])
    // useEffect(()=> {
    //     fetch('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json')
    //     .then((response)=> response.json())
    //     .then((data)=>setMovies(data))
    // }, [])
    // for each object in the array, we need to accesss the title key, and the poster key
    // const listOfMovies = useList();
    return(
        <ul>
            {/* <li>
                <h2>Movie Title</h2>
                <img src="/"/>
            </li> */}
            {/* We can map through the array, and for every element we can return an LI element instead */}
            {props.listOfMovies.map((element)=>
            // <li>
            //     <img src={element.poster}/>
            //     <h2>{element.title}</h2>
            // </li>
            <ListItem poster={element.poster} title={element.title} />
            )}
        </ul>
    );

}

export default List;
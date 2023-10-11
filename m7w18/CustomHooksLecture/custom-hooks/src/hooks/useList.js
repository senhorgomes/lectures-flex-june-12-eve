import { useEffect, useState } from "react";

function useList(url) {
    const [list, setList] = useState([])
    useEffect(()=> {
        fetch(url)
        // fetch('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json')
        .then((response)=> response.json())
        .then((data)=>setList(data))
    }, [])
    return list;
}

export default useList;
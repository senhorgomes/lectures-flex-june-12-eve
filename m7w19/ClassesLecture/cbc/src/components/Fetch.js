import { useEffect, useState } from "react";

function Fetch() {
    const [fetchedData, setFetchedData] = useState([])
    useEffect(()=> {
        fetch('https://swapi.dev/api/people/1')
            .then(result => result.json())
            .then(data => setFetchedData(data))
            return ()=> {
                console.log("Deleted component")
            }
    }, [])
    return (
        <>
            <h2>This characters name is: {fetchedData.name}</h2>
        </> 
     );
}

export default Fetch;
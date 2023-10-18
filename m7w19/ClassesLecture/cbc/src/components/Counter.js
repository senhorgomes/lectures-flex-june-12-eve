import { useState } from "react";

// Stateless
// There was no way to use React features, or even capture data inbetween renders
function Counter() {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount((prev)=>(prev + 1))
    }

    return ( 
        <>
            <h2>Amount of times this button has been clicked: {count}</h2>
            <button onClick={handleClick}>Click me!</button>
        </>
     );
}

export default Counter;
import { useState } from 'react';

function Counter() {
    // State is the getter -> This allows us to retrieve the value of state
    // setState is the setter -> This allows us to SET state, or modify the value of state
    // The zero, is actually the default state
    // State can be almost anything, arrays, objects, strings,

    const [counterValue, setCounterValue] = useState(0)

    return (
        <div>
            <h2>Amount of Clicks: {counterValue}</h2>
            {/* <button onClick={()=> counterValue += 1}>Increment!</button> */}
            {/* By calling state directly and adding to it, is what we call stale state */}
            {/* <button onClick={()=> setCounterValue(counterValue + 1)}>Increment!</button> */}
            {/* prev is the previous state */}
            <button onClick={()=> setCounterValue((previous)=> previous + 1)}>Increment!</button>
            {/* <button onClick={()=> anotherCounter += 1}>Increment!</button> */}
        </div>
     );
}

export default Counter;
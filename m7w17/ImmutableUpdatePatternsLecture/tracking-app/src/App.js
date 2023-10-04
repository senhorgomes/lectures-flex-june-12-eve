import './App.css';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import Navbar from './components/NavBar/Navbar';
import { useState, useReducer } from 'react';

const defaultState = [
  {
    id: 1,
    name: "Doors",
    description: "Extremely ineffective portals, allows you to walk through room dividers"
  },
  {
    id: 2,
    name: "Floor Wax",
    description: "Slippy slidy, try not to slip'n'slide down the hall"
  },
  {
    id: 3,
    name: "Room Dividers",
    description: "Definitely NOT vertical dividers, we couldn't find a better name"
  },
  {
    id: 4,
    name: "Cabin Dividers",
    description: "Smaller room dividers, not the concrete ones"
  },
]

// This will handle all the logic of our state

const reducer = (state, action) => {
  // Checking to see the action type
  if(action.type === 'add_item') {
    return [...state, action.data]
  }

  throw Error('Unknown action.')
}

function App() {
  // Create items for inventory
  // Create an array of objects
  // each object will be an item in our inventory
  // Doors
    // Extremely ineffective portals, allows you to walk through room dividers
  // Floor Wax
    // Slippy slidy, try not to slip'n'slide down the hall
  // Room Dividers
    // Definitely NOT vertical dividers, we couldn't find a better name
  // Cabin Dividers
    // Smaller room dividers, not the concrete ones
  // const [inventory, setInventory] = useState(
  //   [
  //     {
  //       id: 1,
  //       name: "Doors",
  //       description: "Extremely ineffective portals, allows you to walk through room dividers"
  //     },
  //     {
  //       id: 2,
  //       name: "Floor Wax",
  //       description: "Slippy slidy, try not to slip'n'slide down the hall"
  //     },
  //     {
  //       id: 3,
  //       name: "Room Dividers",
  //       description: "Definitely NOT vertical dividers, we couldn't find a better name"
  //     },
  //     {
  //       id: 4,
  //       name: "Cabin Dividers",
  //       description: "Smaller room dividers, not the concrete ones"
  //     },
  //   ]
  // )

  const [state, dispatch] = useReducer(reducer, defaultState)
  return (
    <div className="App">
      {/* <Header />
      <Counter /> */}
      <Navbar />
      {/* {[
        <article>
        <p className="name">{props.name}</p>
        <p className="description">{props.description}</p>
    </article>
    <article>
    <p className="name">{props.name}</p>
    <p className="description">{props.description}</p>
</article>
<article>
            <p className="name">{props.name}</p>
            <p className="description">{props.description}</p>
        </article>
      ]} */}
      {state.map((individualObject)=> 
      <Item 
        name={individualObject.name} 
        description={individualObject.description}
      />)}
      <Form 
        // set a new item in the inventory state
        // setInventory={setInventory}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;

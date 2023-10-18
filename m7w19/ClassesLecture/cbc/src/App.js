import './App.css';
import Header from './components/ClassHeader';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
import Fetch from './components/Fetch';
import ClassFetch from './components/ClassFetch';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deleteComponente: true}
  }
  handleClick (){
    this.setState({deleteComponente: false})
  }
  render() { 
    return (
          <div className="App App-header">
            {/* <Counter/> */}
            {/* <Header/> */}
            {this.state.deleteComponente && <Fetch/> }
            {/* <Fetch/> */}
            <button onClick={()=>this.handleClick()}>Delete the component!</button>
            <ClassFetch/>
          </div>
        );
  }
}
 
export default App;
// function App() {
//   return (
//     <div className="App App-header">
//       {/* <Counter/> */}
//       {/* <Header/> */}
//       <ClassCounter />
//       {/* <Fetch/> */}
//       <ClassFetch/>
//     </div>
//   );
// }
import { Component } from "react";

class ClassFetch extends Component {
    
// In class based components there are three phases
// Mounting phase
// render()
// componentDidMount()
// Updating phase
    // render()
    // shouldComponentUpdate()
    // getSnapshotBeforeUpdate()
    // componentDidUpdate()
// Unmounting phase
    constructor() {
        super();

        this.state = {
            fetchedData: {}
        }
    }
    componentDidMount(){
        fetch('https://swapi.dev/api/people/1')
            .then(result => result.json())
            .then(data => this.setState({fetchedData: data}))
    }
    render() { 
        return ( 
            <h2>This characters name is: {this.state.fetchedData.name}</h2>
         );
    }
}
 
// function Fetch() {
//     const [fetchedData, setFetchedData] = useState({})
//     useEffect(()=> {
//         fetch('https://swapi.dev/api/people/1')
//             .then(result => result.json())
//             .then(data => setFetchedData(data))
//     })
//     return (
//         <>
//             <h2>This characters name is: {fetchedData.name}</h2>
//         </> 
//      );
// }
export default ClassFetch;
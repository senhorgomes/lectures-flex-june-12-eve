import { Component } from "react";
// Methods are what we call hooks in class based components
class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleClick (){
        this.setState({count: this.state.count + 1})
    }

    componentWillUnmount(){
        console.log("YOU DELETED ME!!! I TRUSTED YOU!!!")
    }

    render() {
        return (
            <>
                {/* <h2>Amount of times this button has been clicked: {count}</h2> */}
                <h2>{this.props.header} {this.state.count}</h2>
                {/* <h2>Amount of times this button has been clicked: {this.state.count}</h2> */}
                {/* setCount((count)=>(count + 1)) */}
                <button onClick={()=>this.handleClick()}>Click me!</button>
            </>
        );
    }
}

// function Counter() {

//     const [count, setCount] = useState(0)
//     const [name, setName] = useState("")

//     const handleClick = () => {
//         setCount((count)=>(count + 1))
//         setCount((prev)=>(prev + 1))
//     }

//     return ( 
//         <>
//             <h2>Amount of times this button has been clicked: {count}</h2>
//             <button onClick={handleClick}>Click me!</button>
//         </>
//      );
// }
export default ClassCounter;
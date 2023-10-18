import { Component } from "react";

// In class based components there are three phases
// Mounting phase
    // render()
// Updating phase
    // render()
// Unmounting phase

class Header extends Component {
    render() { 
        return (
            <h1>Class based component!</h1>
        );
    }
}
 
export default Header;
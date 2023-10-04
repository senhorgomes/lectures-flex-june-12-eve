import './Form.css'
import { useState } from 'react';
function Form(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        // Prevent the page from refreshing once the form is submitted
        event.preventDefault();
        // Create a new item object
        const newItem = {
            id: 10,
            name: name,
            description: description
        }
        // Reset our text fields
        setName("")
        setDescription("")
        // How do we send this upwards?
        // setInventory([newitem])
        // props.setInventory((previousArray)=>[...previousArray,newItem])
        props.dispatch({type: 'add_item', data: newItem})
    }

    return (
        <div>
            <h2 className="component-title">Add Item Form </h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    value={name}
                    type="text" 
                    onChange={(event) => setName(event.target.value)}
                    />
                <label>Description</label>
                <input
                    value={description}
                    type="text" 
                    onChange={(event) => setDescription(event.target.value)}
                />

                <button type='submit'> Add Item </button>
            </form>
        </div>
    );
}

export default Form;
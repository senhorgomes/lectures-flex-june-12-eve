import './Item.css'

function Item(props) {
    return ( 
        <article>
            <p className="name">{props.name}</p>
            <p className="description">{props.description}</p>
        </article>
     );
}

export default Item;
function ListItem(props) {
    return (
        <li>
            <img src={props.poster} />
            <h2>{props.title}</h2>
        </li>
    );
}

export default ListItem;
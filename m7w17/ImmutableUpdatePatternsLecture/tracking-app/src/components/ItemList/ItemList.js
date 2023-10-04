import Item from "../Item/Item";
function ItemList({items}) {
    return ( 
        <section>
            <h2>Inventory:</h2>
            {items.map((item)=><Item/>)}
        </section>
     );
}

export default ItemList;
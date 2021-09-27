import data from './data';

const total = data.reduce( (acc, obj) => {
    return acc + parseFloat( obj.price.slice(1) )
}, 0).toFixed(2);

function Inventory() {
    return (
        <div className="Inventory">
            <h3>Total cost of inventory: ${total}</h3>
        </div>
    )
}

export default Inventory;
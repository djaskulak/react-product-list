import data from './data';
import './ProductList.css';

function ProductList(props) {
    const { category } = props;

    return (
        <div class="ProductList">
            {data.filter(obj => obj.category === category).map(obj => {
                return (
                    <div>
                    <h2>{obj.name}</h2>
                    <p>{obj.description}</p>
                    <p>{obj.price}</p>
                    <small>Category: {obj.category} | Rating: {obj.rating}</small>
                    </div>
            )
            })}
        </div>
    )
}

export default ProductList
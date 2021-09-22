import {catsAndCounts} from './data';

function CategoryButton(props) {
    const { category, onClick } = props;
    return (
        <div className = "CategoryButton">
            { catsAndCounts.map(obj => {
                const className = obj.name === category ? 'selected' : ' '
                return (
                <button 
                    className={className}
                    onClick = {() => onClick(obj.name)}
                >
                    {obj.name}
                    <span>{obj.count}</span>
                </button>
                )
            })}
        </div>
    )
}

export default CategoryButton;
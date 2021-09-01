import {catsAndCounts} from './data';

function CategoryList() {
    return (
        <div class="CategoryList">
          { catsAndCounts.map(obj => {
            return (
              <button>
                {obj.name}
                <span>{obj.count}</span>
              </button>
            )
          })}
        </div>
    )
}

export default CategoryList;
import './App.css';
import data, {uniqueCategories} from './data';

import CategoryList from './CategoryList';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <h1>Productify</h1>
      <p>Product Count: {data.length}</p>
      <p>Category Count: {uniqueCategories.length}</p>
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;

import './App.css';
import data, {uniqueCategories} from './data';

import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header 
        title="Productify"
        productCount={data.length}
        categoryCount={uniqueCategories.length}
      />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;

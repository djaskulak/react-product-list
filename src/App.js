import './App.css';
import { useState } from 'react';
import data, {uniqueCategories} from './data';

import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Header from './Header';

function App() {
  const [category, setCategory] = useState('Toys');

  return (
    <div className="App">
      <Header 
        title="Productify"
        productCount={data.length}
        categoryCount={uniqueCategories.length}
      />
      <CategoryList 
        category = {category}
        onClick = { newCategory =>  setCategory(newCategory) }
      />
      <ProductList 
        category = {category}
      />
    </div>
  );
}

export default App;

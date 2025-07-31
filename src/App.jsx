import { useState } from 'react';
import './App.css';
import ProductCard from './Components/ProductCard.jsx';
import data from './data.js';

function App() {
  return (
    <div className="product-card">
      <div className="product-name"></div>
      {data.map((item, indesx) => (
        <ProductCard
          key={item.id}
          name={item.name}
          data={item.inStock}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default App;

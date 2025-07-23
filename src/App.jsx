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
          key="Louis Vitton Dirty Socks"
          name={item.name}
          data={item.inStock}
        />
      ))}
    </div>
  );
}

export default App;

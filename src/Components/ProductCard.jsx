import { useState } from 'react';

function ProductCard({ name, data, price }) {
  const [inStock, setInStock] = useState(true);

  function toggleInStock() {
    setInStock(!inStock);
  }

  return (
    <div>
      <h1>{name}</h1>
      <h3>{data}</h3>
      <h3>{price}</h3>
      <p>{inStock ? 'Available Now!' : "Sorry we're out of stock."}</p>

      <button onClick={toggleInStock}>
        {inStock ? 'Mark as Out of Stock' : 'Restock Item'}
      </button>
    </div>
  );
}

export default ProductCard;

import React from 'react';

// Define the product data
const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Smartphone", description: "Latest model with top features.", price: 800 },
  { id: 3, name: "Tablet", description: "Portable and powerful tablet.", price: 600 },
];

function ProductList() {
  return (
    <div style={{ padding: 20 }}>
      {products.map(product => (
        <div key={product.id} style={productStyle}>
          <h2>{product.name} - ${product.price}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

// Styling for each product
const productStyle = {
  margin: '20px 0',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '8px'
};

export default ProductList;

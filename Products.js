import React, { useState } from 'react';

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 399 }
  ]);
  
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          name: newProduct.name,
          price: parseFloat(newProduct.price)
        }
      ]);
      setNewProduct({ name: '', price: '' });
    }
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Our Products</h1>
      
      <div className="add-product">
        <input
          type="text"
          value={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
          placeholder="Product name"
        />
        <input
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
          placeholder="Price"
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
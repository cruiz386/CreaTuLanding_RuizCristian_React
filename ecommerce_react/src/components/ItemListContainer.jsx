import React, { useState } from 'react';
import ProductCard from './ProductCard';
import NavBar from './NavBar';

const products = [
  { id: 1, name: 'Amazon Echo Show 8 (2nd Gen)', description: 'Pantalla inteligente de 8 pulgadas con Alexa', price: '$130', image: './src/assets/smart_display/AmazonEchoShow8.jpg', category: 'Smart Display' },
  { id: 2, name: 'Amazon Echo Show 8 (2nd Gen)', description: 'Pantalla inteligente de 8 pulgadas con Alexa', price: '$130', image: './src/assets/smart_display/AmazonEchoShow8.jpg', category: 'Smart Display' },
  { id: 3, name: 'Amazon Echo Show 8 (2nd Gen)', description: 'Pantalla inteligente de 8 pulgadas con Alexa', price: '$130', image: './src/assets/smart_display/AmazonEchoShow8.jpg', category: 'Smart Display' }
];

const ItemListContainer = ({ message }) => {
  const [count, setCount] = useState(0);

  const addToCart = (quantity) => {
    setCount(prevCount => prevCount + quantity);
  };

  return (
    <>
      <NavBar cartCount={count} />
      <div className="col-lg-12 col-md-12 mb-4 mb-md-0 text-center">
        <h2 className="mb-4">{message}</h2>
        <div className="row">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;


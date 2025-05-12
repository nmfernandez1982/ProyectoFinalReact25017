import React from 'react';
import ProductList from './ProductList';

const Ofertas = () => {
  return (
    <div className="container">
      <h1>Ofertas</h1>
      <ProductList category="men's clothing" />
    </div>
  );
};

export default Ofertas;

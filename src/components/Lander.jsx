import React, { Component } from 'react';
import '../assets/sass/components/Lander.scss';
import Navbar from './Navbar'
import ProductCard from './ProductCard';

export default class Lander extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <header></header>
        <div className="container">
          <div className="product-wrap">
            <ProductCard />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import '../assets/sass/components/ProductPage.scss';
import Navbar from './Navbar'

export default class ProductPage extends Component {
  // componentDidMount() {
  //   this.props.getProduct(this.props.match.params.id)
  // }
  render() {
    return (
      <div>
        <Navbar />
        <div className="box"></div>
      </div>
    );
  }
}

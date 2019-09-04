import React, { Component } from 'react'
import '../assets/sass/components/Lander.scss'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Axios from 'axios';

export default class Lander extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    Axios
      .get('/api/all-products')
      .then(res => { this.setState({ products: res.data }); console.log() })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar />
        <header>
          <div className="header-links">
            <Link>Cars & trucks</Link>
            <Link>Furniture</Link>
            <Link>Appliances</Link>
            <Link>Games & Toys</Link>
            <Link>Clothing & shoes</Link>
            <DropdownButton
              variant="none"
              alignRight
              title="More"
              id="dropdown-menu-align-right"
            >
              <Dropdown.Item eventKey="2">Cars & Trucks</Dropdown.Item>
              <Dropdown.Item eventKey="1">Tools & Machinery</Dropdown.Item>
              <Dropdown.Item eventKey="3">Sports & Outdoors</Dropdown.Item>
            </DropdownButton>
          </div>
        </header>
        <div className="container">
          <div className="product-wrap">
            <div className="card-container">
              {this.state.products.map((product) =>
                <ProductCard key={product.id} product={product} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import '../assets/sass/components/ProductPage.scss';
import Navbar from './Navbar'
import { Button } from 'react-bootstrap'
import Maps from './Maps';
import Footer from './Footer';
import Axios from 'axios';

export default class ProductPage extends Component {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      product: {},
      item: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    Axios
      .get(`/api/product/${id}`)
      .then(res => this.setState({ product: res.data[0] }))
      .catch(err => console.log(err))
    // this.props.getProduct(this.props.match.params.id)
  }

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  submitChange = (id, item) => {
    Axios
      .put(`/api/edit-product/${id}`, { item })
      .then(res => res.data)
    this.toggleEdit()
  }

  render() {
    const { img, price, item, city, state, } = this.state.product
    return (
      <div>
        <Navbar />
        <div className="product-header">
          <div className="background">
            <img src={img} alt="Whoops! Something went wrong." />
          </div>
          <div className="img-list">
            <img src={img} alt="Whoops! Something went wrong." />
          </div>
        </div>
        <div className="product-container">
          <div className="section">
            <div className="header-wrap">
              <div className="header-group">
                <div className="header">
                  <div className="tag-wrap">
                    <div className="tag-start"></div>
                    <div className="tag-price">${price}</div>
                    <div className="tag-end"></div>
                    <div className="box"></div>
                  </div>
                  { this.state.isEditing 
                    ? <>
                        <input className="title-input" name="item" type="text" onChange={this.handleInputChange} />
                        <div className="edit" onClick={this.submitChange}>
                          <i className="fas fa-check"></i>
                        </div>
                      </>
                    : 
                      <>
                        <div>{item}</div> 
                        <div className="edit" onClick={this.toggleEdit}>
                          <i className="fas fa-pen"></i>
                        </div>
                      </>
                    }
                  <div className="delete"><i className="fas fa-trash"></i></div>
                </div>
                <div className="subtext">
                  <div className="location-group">
                    <span className="location">{city}, {state} </span><i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="category-group">
                    Posted in <span className="category">Cars & Trucks</span>
                  </div>
                </div>
              </div>
              <div className="card-group">
                <div className="info-card">
                  <div className="header">
                    <img src="http://yaffa-cdn.s3.amazonaws.com/adnews/live/images/yafNews/featureImage/james-hudson2.jpg" alt="" />
                    <div className="name">Matt Deckerson</div>
                  </div>
                  <Button variant="success">Make offer</Button>
                  <Button variant="success-outline">Ask</Button>
                </div>
                <div className="card-links">
                  <div className="link"><i className="far fa-star"></i> Save</div>
                  <div className="link"><i className="fas fa-share-square"></i> Share</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="condition">New (Never used)</div>
            <div className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis accusamus incidunt neque eligendi, placeat exercitationem sapiente omnis quas voluptates nihil fuga ratione eum nobis quisquam voluptatem beatae nisi error aspernatur autem dolor nostrum cumque! Quo explicabo aliquid sed repellendus placeat rem asperiores dicta animi accusamus, architecto recusandae at, similique dolore quis corporis minima omnis quisquam voluptas, dolor ducimus et praesentium!
            </div>
            <Maps />
            <hr/>
            <Button variant="light"><i className="fas fa-flag"></i> Report</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

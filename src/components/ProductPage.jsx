import React, { Component } from 'react';
import '../assets/sass/components/ProductPage.scss';
import Navbar from './Navbar'
import { Button } from 'react-bootstrap'

export default class ProductPage extends Component {
  // componentDidMount() {
  //   this.props.getProduct(this.props.match.params.id)
  // }
  render() {
    return (
      <div>
        <Navbar />
        <div className="product-header">
          <img src="https://photos.offerup.com/CATiw0Ma5OBsuZDcRosfTzvVBlY=/600x450/60c5/60c5ae9bbced46b9bacb43d781a4865d.jpg" alt="" />
        </div>
        <div className="product-container">
          <div className="section">
            <div className="header">
              <div className="tag-wrap">
                <div className="tag-start"></div>
                <div className="tag-price">$23,350</div>
                <div className="tag-end"></div>
                <div className="box"></div>
              </div>
              <div>2017 Dodge Charger r/t</div>
            </div>
            <div>
              Dallas, TX 
            </div>
            <div>
              Posted in Cars & Trucks
            </div>
            <hr/>
            <div className="card-group">
              <div className="info-card">
                <div className="header">
                  <img src="http://yaffa-cdn.s3.amazonaws.com/adnews/live/images/yafNews/featureImage/james-hudson2.jpg" alt=""/>
                  <div className="name">Matt Deckerson</div>
                </div>
                <Button variant="success">Make offer</Button>
                <Button variant="success">Ask</Button>
              </div>
              <div className="card-links">
                <div className="link"><i class="far fa-star"></i> Save</div>
                <div className="link"><i class="fas fa-share-square"></i> Share</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

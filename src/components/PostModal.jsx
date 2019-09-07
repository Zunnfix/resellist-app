import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import '../assets/sass/components/Modals/PostModal.scss'
import { setImg, setItem, setPrice, setCategory, setCity, setState } from '../redux/reducers/productReducer'


function PostModal(props) {
  const { img } = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Post Item
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {img === '' 
          ? <div className="img-filler"></div> 
          : <div className="img"><img src={img} alt="" /></div>
        }
        <div className="item-form-wrap">
          <input className="input-item" name='item' placeholder="Item name..." onChange={(e) => props.setItem(e.target.value)} type="text" />
          <div className="form-group">
            <div className="form-text">$ </div>
            <input className="input-price" name='price' placeholder="Price..." onChange={(e) => props.setPrice(e.target.value)} type="number" />
          </div>
        </div>
        <div className="item-form-wrap">
          <input className="input-img" name='img' placeholder="Upload image" onChange={(e) => props.setImg(e.target.value)} type="text" />
        </div>
        <div className="item-form-wrap">
          <select onChange={(e) => props.setCategory(e.target.value)}>
            <option value="Cell Phones">Choose Category...</option>
            <option value="Cell Phones">Cell Phones</option>
            <option value="Appliances">Appliances</option>
            <option value="Cars & Trucks">Cars & Trucks</option>
            <option value="Furniture">Furniture</option>
            <option value="Games & Toys">Games & Toys</option>
            <option value="Clothing & Shoes">Clothing & Shoes</option>
            <option value="Sports & Outdoors">Sports & Outdoors</option>
            <option value="Tools & Machinery">Tools & Machinery</option>
          </select>
          <input className="input-city" name='city' placeholder="City" onChange={(e) => props.setCity(e.target.value)} type="text" />
          <input className="input-state" name='state' placeholder="State" onChange={(e) => props.setState(e.target.value)} type="text" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Post <i className="fas fa-angle-right"></i></Button>
      </Modal.Footer>
    </Modal>
  );
}

function mapStateToProps(reduxState) {
  return {
    img: reduxState.productReducer.img,
    item: reduxState.productReducer.item,
    price: reduxState.productReducer.price,
    category: reduxState.productReducer.category,
    city: reduxState.productReducer.city,
    state: reduxState.productReducer.state
  }
}

export default connect(mapStateToProps, { setItem, setImg, setPrice, setCategory, setCity, setState })(PostModal);
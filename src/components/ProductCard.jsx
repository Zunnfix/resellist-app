import React from 'react'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../assets/sass/components/ProductCard.scss'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  const { img, item, price, city, state } = props.product
  return (
    <Card>
      <Link to={`/item/${props.product.id}`}>
        <div className="card-img">
          <img src={img} alt="product" />
        </div>
        <Card.Body>
          <Card.Title>{item}</Card.Title>
          <Card.Text className="price">
            ${price}
          </Card.Text>
          <Card.Text className="location">
            {city}, {state}
          </Card.Text>
        </Card.Body>
      </Link>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip>
            Save for later
          </Tooltip>
        }
      >
      <div className="star" onClick={() => props.setFavorite(!props.favorite)}>
        { props.favorite 
          ? <i className="fas fa-star yellow"></i>
          : <i className="far fa-star"></i>
        }
      </div>
      </OverlayTrigger>
    </Card>
  )
}
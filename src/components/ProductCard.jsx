import React from 'react';
import { Card } from 'react-bootstrap';
import '../assets/sass/components/ProductCard.scss';
import { Link } from 'react-router-dom'

export default function ProductCard() {
  return (
    <Card>
      <Link to="/item">
        <div className="">
          <img src="https://photos.offerup.com/bnPJqBnNzvtGuzkH-kvtGr5BlkQ=/600x1066/9329/93295c9107e94edcba5bf067573c529a.jpg" alt="product" />
        </div>
        <Card.Body>
          <Card.Title>Card title that wraps to a new line</Card.Title>
          <Card.Text>
            Aubrey, TX
        </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}
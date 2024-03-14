import React from 'react'
import { Card } from 'react-bootstrap'
import products from '../products'
import { Link } from 'react-router-dom'
export const Product = ({Product}) => {
  return (
  <Card className='my-3 p-3 rounded'  >
        <Link to={`/product/${Product._id}`}>
        <Card.Img src={Product.Img} variant='top'/>
        </Link>

        <Card.Body>
        <Link to={`/product/${Product._id}`}>
        <Card.Img src={Product.image} variant='top'/>
        <Card.Title as="div">
        <strong>{Product.name}</strong>
        </Card.Title>
        </Link>

        <Card.Text as="h3">
        ${Product.price}
        </Card.Text>
        </Card.Body>
  </Card>
  )
}

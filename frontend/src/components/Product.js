import React from 'react'
import { Card } from 'react-bootstrap'
import products from '../products'
export const Product = ({Product}) => {
  return (
  <Card className='my-3 p-3 rounded'  >
        <a href={`/product/${Product._id}`}>
        <Card.Img src={Product.Img} variant='top'/>
        </a>

        <Card.Body>
        <a href={`/product/${Product._id}`}>
        <Card.Img src={Product.image} variant='top'/>
        <Card.Title as="div">
        <strong>{Product.name}</strong>
        </Card.Title>
        </a>

        <Card.Text as="h3">
        ${Product.price}
        </Card.Text>
        </Card.Body>
  </Card>
  )
}

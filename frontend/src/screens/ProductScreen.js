import { Link, useParams } from 'react-router-dom'
import products from '../products'
import React from 'react'
import { Col, Row ,Image } from 'react-bootstrap';


export const ProductScreen = () => {

const {id: productId} = useParams();

const product = products.find((p)=> p._id === productId);

console.log(product)


  return (
    <>
    <Link className='btn btn-primary my-3' to='/'>Back</Link>

    <Row>
  <Col md={5}><Image src={product.image}  alt={product.name} fluid /> </Col>
  <Col md={4}>col 2</Col>
  <Col md={3}>col 3</Col>
    </Row>
    
    </>
  )
}

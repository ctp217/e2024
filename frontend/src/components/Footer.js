import { Container,Col,Row } from 'react-bootstrap'

import React from 'react'

const Footer = () => {

const CurrentYear= new Date().getFullYear();

  return (
    <footer>
    <Container>
    <Row>
    <Col className='text-center py-3'>
    <p>CTP &copy;{CurrentYear}</p>
    </Col>
    </Row>
    
    </Container>
    
    </footer>
  )
}

export default Footer

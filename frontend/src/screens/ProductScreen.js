import { Link, useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import products from "../products";
import React from "react";
import axios from "axios";
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Rating from "../components/Rating";

export const ProductScreen = () => {

  const [product,setProduct]=useState([]);

  const { id: productId } = useParams();

  useEffect(()=>{
    const fetchProduct=async() =>{
      const {data}=await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
    },[productId]);


 // console.log(product);

  return (
    <>
      <Link className="btn btn-primary my-3" to="/">
        Back
      </Link>

      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />{" "}
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>{product.name}</ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>

            <ListGroup.Item>price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>price :</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>status :</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "out os stock"}{" "}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

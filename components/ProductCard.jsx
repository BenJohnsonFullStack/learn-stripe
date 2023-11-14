"use client";

import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { useContext } from "react";

const ProductCard = ({ title, price, id }) => {
  const cart = useContext(ShoppingCartContext);
  const productQuantity = cart.getProductQuantity(id);

  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        {productQuantity ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.decrementCartQuantity(id)}
                  className="mx-2"
                >
                  -
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.incrementCartQuantity(id)}
                  className="mx-2"
                >
                  +
                </Button>
              </Col>
            </Form>
            <Button variant="danger" onClick={() => cart.removeFromCart(id)}>
              Remove from Cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.incrementCartQuantity(id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

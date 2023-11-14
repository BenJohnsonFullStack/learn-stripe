"use client";

import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { useContext } from "react";

const ProductCard = ({ title, price, id }) => {
  const cart = useContext(ShoppingCartContext);
  const productExists = cart.getProductQuantity(id);
  console.log(cart.items);
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => cart.incrementCartQuantity(id)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

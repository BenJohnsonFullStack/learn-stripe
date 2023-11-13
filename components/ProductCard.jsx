"use client";

import { Card, Button, Row, Col, Form } from "react-bootstrap";

const ProductCard = ({ title, price }) => {
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

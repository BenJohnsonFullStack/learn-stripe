"use client";

import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import CartProduct from "./CartProduct";

const Navigation = () => {
  const cart = useContext(ShoppingCartContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () =>
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);

  const totalCartQuantity = cart.items.reduce(
    (currCount, product) => currCount + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-Commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={toggleModal}>Cart {totalCartQuantity} Items</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={isModalOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {totalCartQuantity > 0 ? (
            <>
              <p>Items in Your Cart</p>
              {cart.items.map((product) => (
                <CartProduct key={product.id} {...product} />
              ))}
              <h4>Total: {cart.getTotalCost().toFixed(2)}</h4>

              <Button variant="success">Checkout</Button>
            </>
          ) : (
            <>
              <h3>Cart is Empty</h3>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navigation;

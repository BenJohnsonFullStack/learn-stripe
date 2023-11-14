"use client";

import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";

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
          <h3>This is the Cart</h3>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navigation;

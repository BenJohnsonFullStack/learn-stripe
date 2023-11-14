"use client";

import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState } from "react";

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prevState) => !prevState);

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-Commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={toggleModal}>Cart 0 Items</Button>
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

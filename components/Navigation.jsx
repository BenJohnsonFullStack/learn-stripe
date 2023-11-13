"use client";

import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState } from "react";

const Navigation = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen((prevState) => !prevState);

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-Commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={toggleModal}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={modalOpen} onHide={toggleModal} />
    </>
  );
};

export default Navigation;

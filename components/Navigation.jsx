"use client";

import { Button, Container, Navbar, Modal } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="/">E-Commerce Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button>Cart 0 Items</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

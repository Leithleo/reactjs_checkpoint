import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mynav">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Car Models</Nav.Link>
          </Nav>
        </Container>
        <div>
          <Nav.Link href="#home">Login</Nav.Link>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;

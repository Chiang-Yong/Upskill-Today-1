import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Upskill from "../../images/WhiteLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

const NavbarUST = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={Upskill}
            alt="logo"
            className="d-inline-block align-top navbar-image "
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex fw-bold fs-5">
            <Nav.Link href="home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="about" className="mx-2">About Us</Nav.Link>
            <Nav.Link href="careerpathway" className="mx-2">Career Pathway</Nav.Link>
            <Nav.Link href="corporate" className="mx-3">
              Corporate
            </Nav.Link>
            <Button className="me-4 fs-5 navbar-button"
              style={{
                backgroundColor: isHovering ? "blue" : "#ff7b00",
                border: 'none',
                outline: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              href="contact"
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarUST;

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
    <Navbar bg="dark" expand="lg" variant="dark">
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
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="careerpathway">Career Pathway</Nav.Link>
            <Nav.Link href="corporate" className="me-5">
              Corporate
            </Nav.Link>
            <Button
              style={{
                backgroundColor: isHovering ? "blue" : "#ff7b00",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              href="contact"
              className="me-4 fs-5 navbar-button"
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

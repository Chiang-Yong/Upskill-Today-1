import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Upskill from "../../images/WhiteLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link } from "react-router-dom";

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
            <Link to="/Home" className="text-white mx-2"
              style={{ textDecoration: "none", fontWeight: "700" }}>Home</Link>
            <Link to="/About" className="text-white mx-2"
              style={{ textDecoration: "none", fontWeight: "700" }}>About-Us</Link>
            <Link to="/CareerPathway" className="text-white mx-2"
              style={{ textDecoration: "none", fontWeight: "700" }}>Career-Pathway</Link>
            <Link to="/Corporate" className="text-white mx-2"
              style={{ textDecoration: "none", fontWeight: "700" }}>
              Corporate
            </Link>
            <Button className="me-4 fs-5 navbar-button"
              style={{
                backgroundColor: isHovering ? "blue" : "#ff7b00",
                border: 'none',
                outline: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                maxWidth: '200px',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              to="/Contact"
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

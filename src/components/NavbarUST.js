import React from "react";
import Button from "react-bootstrap/Button";
import Upskill from "../images/UpskillToday Logo.bmp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavStyle = {
  main: {
    zIndex: "10",
    display: "flex",
    fontWeight: "bold",
  },

  button: {
    color: "white",
    whiteSpace: "nowrap",
    backgroundColor: "#ff7b00",
    textDecoration: "none",
    border: "none",
    outline: "none",
    minWidth: "100px",
    maxWidth: "200px",

    height: "35px",
    alignItems: "center",

    hover: {
      backgroundColor: "#000",
      transform: "translateY('-2px')",
    },
  },

 
};

const NavbarUST = () => {
  return (
    <Navbar bg="black" expand="lg" variant='dark'>
     <Container fluid> 
        <Navbar.Brand href="/" >
          <img src={Upskill} alt="logo" className='d-inline-block align-top'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex fw-bold fs-6">
            <Nav.Link href="home">
              Home
            </Nav.Link>
            <Nav.Link href="about">
              About
            </Nav.Link>
            <Nav.Link href="careerpathway">Career Pathway</Nav.Link>
            <Nav.Link href="corporate" className="me-5">Corporate</Nav.Link>
            <Button style={NavStyle.button} href="contact" className="me-4">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container> 
    </Navbar>
  );
};

export default NavbarUST;

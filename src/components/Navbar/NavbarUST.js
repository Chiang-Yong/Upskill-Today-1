import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Upskill from "../../images/UpskillToday Logo.bmp";
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
    <Navbar sticky="top" expand="lg" className="navbar-main">
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
          <Nav className="ms-auto d-flex fw-bold fs-5 ">
            <Link 
              to="/Home"
              className="text-black mx-5 hover-navbar border-start"
              style={{paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600" }}
            >
              Home
            </Link>
            <Link
              to="/About"
              className="text-black mx-5 hover-navbar border-start"
              style={{ paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600" }}
            >
              About Us
            </Link>
            <Link
              to="/CareerPathway"
              className="text-black mx-5 hover-navbar border-start"
              style={{ paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600", }}
            >
              Career Pathway
            </Link>
            <Link
              to="/Corporate"
              className="text-black mx-5 hover-navbar border-start"
              style={{ paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600",}}
            >
              Corporate
            </Link>
            <Link
              to="/Contact"
              className="text-black me-3 border-start navbar-hover"
              style={{ textDecoration: "none", paddingLeft: "1.5rem"}}
            >
              <Button className="navbar-button navbar-hover"
           /*  style={{ fontSize: '1.0em',
                fontWeight: 600,
                backgroundColor: '#ff7b00',
                border: 'none',
                borderRadius: '3px',
                width: '150px',
                padding: '0.2rem', }} */
              >Contact Us</Button>
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarUST;

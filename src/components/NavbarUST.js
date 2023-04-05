import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
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
    justifyContent: "center",
  },

  button: {
    marginLeft: "20px",
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
    justifyContent: "center",

    hover: {
      backgroundColor: "#000",
      transform: "translateY('-2px')",
    },
  },

  link: {
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    marginLeft: "0px",

    "&:hover": {
      color: "#ff7b00",
    },
  },
};

const NavLink = css`
  color: #000;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    color: #ff7b00;
  },

  }
`;

const Logo = styled(Link)`
  ${NavLink};
  font-style: italic;
  display: block;
  background-image: url(${Upskill});
  background-size: contain;
  background-repeat: no-repeat;
  height: 60px;
  width: 200px;
  text-decoration: none;
  margin-left: 50px;
  align-items: center;
  justify-content: center;
`;

const NavbarUST = () => {
  return (
    <Navbar bg="light" expand="lg" style={NavStyle.main}>
      <Container>
        <Navbar.Brand>
          <Logo to="/"></Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={NavStyle.link}>
            <Nav.Link href="home" style={NavStyle.link}>
              Home
            </Nav.Link>
            <Nav.Link href="about" style={NavStyle.link}>
              About
            </Nav.Link>
            <Nav.Link href="career-pathway">Career Pathway</Nav.Link>
            <Nav.Link href="corporate">Corporate</Nav.Link>
            <Button style={NavStyle.button} href="contact">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarUST;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Upskill from "../../images/UpskillToday Logo.bmp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

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
            className="d-inline-block navbar-image"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold fs-6">
            <Link 
              to="/Home"
              className="text-black mx-5 hover-navbar border-start"
              style={{paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600" }}
            >
              <span className="hover-effect">Home</span>
            </Link>
            <Link
              to="/About"
              className="text-black mx-5 hover-navbar border-start"
              style={{ paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600" }}
            >
             <span className="hover-effect"> About Us</span>
            </Link>
          {/*  <Link
              to="/CareerPathway"
              className="text-black mx-5 hover-navbar border-start"
              style={{ paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600", }}
            ></Link> */}
              <NavDropdown className="navbar-margintop border-start" title="Career Pathway" id="basic-nav-dropdown">
              <NavDropdown.Item><NavLink to="/CareerPathway">Career Pathway</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/PathwayDetails/JavaCourse">Java</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/PathwayDetails/JavascriptCourse">JavaScript</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/PathwayDetails/DevOpsCourse">DevOps</NavLink></NavDropdown.Item>
              </NavDropdown>
            
            <Link
              to="/Corporate"
              className="text-black mx-5 hover-navbar border-start"
              style={{ paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600",}}
            >
              <span className="hover-effect">Corporate</span>
            </Link>
            <Link
              to="/Contact"
              className="text-black me-2 border-start"
              style={{marginRight:"1%", textDecoration: "none", paddingLeft: "1.0rem"}}
            >
              <Button className="navbar-button me-5" 
              //style={{marginRight:"1%",backgroundColor:"#ff7b00", border:"none"}}
              >Contact Us</Button>
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarUST;

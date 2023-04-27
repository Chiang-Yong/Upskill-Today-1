import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Upskill from "../../images/UpskillToday Logo.bmp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const NavbarUST = ({toggle}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" className="navbar-main">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={Upskill}
            alt="logo"
            className="d-inline-block navbar-image"
          />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggle} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold fs-6">
            <Link 
              to="/Home"
              className="text-black mx-5 px-2 hover-navbar border-start fw-bold link"
             // style={{paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600" }}
            >
              <span className="hover-effect">Home</span>
            </Link>
            <Link
              to="/About"
              className="text-black mx-5 px-2 hover-navbar border-start fw-bold link"
             // style={{ paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600" }}
            >
             <span className="hover-effect"> About Us</span>
            </Link >
              <NavDropdown className="navbar-dropdown border-start fw-bold hover-navbar" title="Career Pathway" id="responsive-nav-dropdown">
                <NavDropdown.Item ><NavLink to="/CareerPathway" className="dropdown-item">Career Pathway</NavLink></NavDropdown.Item>
                <NavDropdown.Item ><NavLink to="/PathwayDetails/JavaCourse" className="dropdown-item">Java</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/PathwayDetails/JavascriptCourse" className="dropdown-item">JavaScript</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/PathwayDetails/DevOpsCourse" className="dropdown-item">DevOps</NavLink></NavDropdown.Item>
              </NavDropdown>

            <Link
              to="/Corporate"
              className="text-black mx-5 px-2 hover-navbar border-start fw-bold link"
             // style={{ paddingLeft: "1.0rem", textDecoration: "none", fontWeight: "600",}}
            >
              <span className="hover-effect">Corporate</span>
            </Link>
            <Link
              to="/Contact"
              className="text-black me-2 px-2 link"
             // style={{marginRight:"1%", textDecoration: "none", paddingLeft: "1.0rem"}}
            >
              <Button className="navbar-button me-2" 
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

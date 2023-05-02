import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Upskill from "../../images/UpskillToday Logo.bmp";
import "./navbar.css";
import styled, { css } from "styled-components";

const linkStyling = css`
  padding: 0.5rem 2rem;
  margin: 0 1rem;
  flex: 0 1;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  border-radius: 100px;
  color: black;
  background-color: white;
  transition: all 0.4s;
  z-index: 3;

  &:hover {
    /* transform: translateY(-3px); */
    color: #ff7b00;
  }
`;

const SubMenu = ({ children, title, ...props }) => {
  // const [subnavOpen, setSubnavOpen] = useState(false);
  // const toggleSubNav = () => {
  //   setSubnavOpen(!subnavOpen);
  // };

  let navigate = useNavigate();
  const pathwayPath = () => {
    let path = "/CareerPathway";
    navigate(path);
  };

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
    // console.log("entered");
  };
  const hideDropdown = (e) => {
    setShow(false);
    // console.log("left");
  };

  return (
    <GroupParentWrapper
      // onClick={toggleSubNav}
      // activeSubNav={subnavOpen}
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      onClick={pathwayPath}
      {...props}
    >
      {title}
      {/* <GroupLinks activeSubNav={subnavOpen}>{children}</GroupLinks> */}
      <GroupLinks activeSubNav={show}>{children}</GroupLinks>
    </GroupParentWrapper>
  );
};

const GroupParentWrapper = styled.div`
  position: relative;
  cursor: pointer;
  ${linkStyling}

  &::after {
    content: "";
    position: absolute;
    /*  border-bottom: 3px solid black; */
    /*  border-right: 3px solid black; */
    display: block;
    height: 1rem;
    width: 1rem;
    z-index: 5;
    transition-property: top, transform;
    transition-duration: 1200ms;
    transition-timing-function: ease-out;
    transform: ${(props) =>
      props.activeSubNav
        ? "rotate(" + String(-135 + -360 * 2) + "deg)"
        : "rotate(45deg)"};
    top: calc(50% - 0.6rem);
    left: 100%;
  }
`;
const GroupLinks = styled.div`
  position: absolute;
  top: 100%;
  left: 20%;
  width: auto;
  background: white;
  z-index: 2;
  overflow: hidden;
  opacity: 1;
  max-height: ${(props) => (props.activeSubNav ? "9em" : "0")};
  transition-property: max-height;
  transition-duration: 200ms;
  transition-timing-function: ease-out;

  a {
    display: block;
    position: relative;
    width: 13rem;
    background-color: transparent;
    text-decoration: none;
    color: black;
  }
`;

const NavBar = ({ toggle }) => {
  return (
    <nav
      className="navbar"
      style={{ position: "fixed", backgroundColor: "white", zIndex: 100 }}
    >
      <Link className="link" to="/">
        <img src={Upskill} alt="logo" className="navbar-logo" />
      </Link>
      <div>
        <i className="icon" onClick={toggle} style={{ fontSize: "2.0rem" }}>
          <FaBars />
        </i>
      </div>
      <div className="menu">
        <Link className="link" to="/Home">
          Home
        </Link>

        <Link className="link" to="/About">
          About Us
        </Link>
        <SubMenu
          title="Career Pathway"
          style={{ borderBottom: "", borderWidth: "1px", borderColor: "white" }}
        >
          {/* <Link className="link" to="/CareerPathway">
            Career Pathway
          </Link> */}
          <div onClick={(e) => e.stopPropagation()}>
            <Link className="link" to="/PathwayDetails/JavaCourse">
              Java
            </Link>
            <Link className="link" to="/PathwayDetails/JavascriptCourse">
              JavaScript
            </Link>
            <Link className="link" to="/PathwayDetails/DevOpsCourse">
              DevOps
            </Link>
          </div>
        </SubMenu>

        {/*  <Link className="link" to="/CareerPathway">
            Career Pathway
          </Link> */}

        <Link className="link" to="/Corporate">
          Corporate
        </Link>

        <Link className="link navbtn" to="/Contact">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

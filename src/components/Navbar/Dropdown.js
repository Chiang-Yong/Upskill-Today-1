import React from "react";
import styled from "styled-components";
import Upskill from "../../images/UpskillToday Logo.bmp";
import "./dropdown.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";


const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff9eb;
  color: black;
  display: inline-block;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (min-width: 1256px) {
    display: none;
  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <img src={Upskill} alt="logo" />
      <div className="dropdown">
        <FaTimes className="icon" onClick={toggle} />

        <div className="menu">
          <Link to="/Home" className="link" onClick={toggle}>
            Home
          </Link>
          <Link to="/About" className="link" onClick={toggle}>
            About Us
          </Link>
          <Link className="link" to="/CareerPathway" onClick={toggle}>
            Career Pathway
          </Link>
          <Link to="/Corporate" className="link" onClick={toggle}>
            Corporate
          </Link>
          <Link to="/Contact" className="link" onClick={toggle}>
            Contact Us
          </Link>
        </div>
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;

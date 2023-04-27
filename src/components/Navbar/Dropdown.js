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
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <img src={Upskill} alt="logo" />
      <div className="dropdown" onClick={toggle}>
        <FaTimes className="icon" />

        <div className="menu">
          <Link to="/Home" className="link">
            Home
          </Link>
          <Link to="/About" className="link">
            About Us
          </Link>
          <Link to="/CareerPathway" className="link">
            Career Pathway
          </Link>
          <Link to="/Corporate" className="link">
            Corporate
          </Link>
          <Link to="/Contact" className="link">
            Contact Us
          </Link>
        </div>
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;

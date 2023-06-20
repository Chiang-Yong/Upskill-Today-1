import React from "react";
import styled from "styled-components";
import Upskill from "../images/UpskillToday Logo.bmp"
import "./dropdown.css";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
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
        <CloseIcon className="icon" onClick={toggle} />

        <div className="menu">
          <Link to="/login" className="link" onClick={toggle}>
            Login
          </Link>
          <Link to="/register" className="link" onClick={toggle}>
            Register
          </Link>
        </div>
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;

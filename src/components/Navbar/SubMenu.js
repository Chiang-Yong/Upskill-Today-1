import styled, { css } from "styled-components";
import { useState } from "react";


const linkStyling=css`
  padding: 2rem;
  margin: 0 1rem;
  margin-left: 5%;
  flex: 0 1;
  font-size: 1.5rem;
  font-weight:600;
  text-decoration: none;
  text-align: left;
  white-space: nowrap;
  
  color: black;
  background-color: #fff9eb;
  transition: all 0.4s;
  z-index: 3;
 border-bottom: solid;
 border-bottom-color: rgb(255, 123, 0, .9);
 border-width: 0.01rem; 
 width:90%;

  &:hover {
    color:#ff7b00;
  }
`;



const SubMenu = ({ children, title, ...props }) => {
  const [subnavOpen, setSubnavOpen] = useState(false);
  const toggleSubNav = () => {
    setSubnavOpen(!subnavOpen);
  };

  return (
    <GroupParentWrapper
      onClick={toggleSubNav}
      activeSubNav={subnavOpen}
      {...props}
    >
      {title}
      <GroupLinks activeSubNav={subnavOpen}>{children}</GroupLinks>
    </GroupParentWrapper>
  );
};

const GroupParentWrapper = styled.a`
  position: relative;
  cursor: pointer;
  ${linkStyling}

  &::after {
    content: "";
    position: absolute;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
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
    left: 25%;
    width: auto;
    background: white;
    z-index: 2;
    overflow: hidden;
    opacity: 1;
    max-height: ${(props) => (props.activeSubNav ? "25em" : "0")};
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


  export default SubMenu;
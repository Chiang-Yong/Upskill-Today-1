import React, {useState} from "react";
import { useEffect } from "react";
import { Row, Button, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./pathwaydetails.css";

const AJSCstyle = {
  main: {
    width: "100%",
    height: "auto",
    display: "block",
    backgroundColor: "#fff9eb",
  },
  button: {
    marginTop: "3%",
    marginBottom: "5%",
    backgroundColor: "#ff7b00",
    fontWeight: "600",
    border: "none",
    outline: "none",
    width: "150px",
  },

  title: {
    marginTop: "5%",
    color: "#000",
    fontWeight: 800,
    fontSize: "clamp(1.5rem, 2vw,2.5rem)",
    marginTop: "-1%",
  },

  image: {
    display: "block",
    objectFit: "cover",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },

  container: {
    marginTop: "1%",
    paddingTop: "2%",
    border: "none",
  },
  card: {
    border: "none",
    backgroundColor: "#fff9eb",
  },
};

const ApplyJSCourse = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const JSButton = {
    button: {
      marginTop: "3%",
      marginBottom: "5%",
      backgroundColor: isHover ? "#a60037" : "#ff7b00",
      borderColor: isHover ? "#a60037" : "",
      boxShadow: isHover
        ? "0 12px 16px 0 rgba(0, 0, 0, 0.24) 0 17px 50px 0 rgba(0, 0, 0, 0.19)"
        : "",
      fontWeight: "600",
      fontSize: "clamp(1.0em, 2vw, 1.2em)",
      border: "none",
      borderRadius: "25px",
      outline: "none",
      width: "150px",
      textDecoration: "none",
      paddingTop: "0.5em",
      paddingBottom: "0.5em",
    },
  }
  return (
    <div style={AJSCstyle.main}>
      <Container style={AJSCstyle.container} className="rounded-4">
        <Row>
          <h1 style={AJSCstyle.title} className="text-center">
            Apply to Our JavaScript Developer Track
          </h1>
        </Row>
        <Row className="d-flex justify-content-center pathway">
          <HashLink
            to="/CareerPathway#register"
            className="d-flex justify-content-center"
            smooth
            style={{ textDecoration: "none" }}
          >
            <Button type="submit" 
            style={JSButton.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
           // className="pathway-button"
            //style={{marginTop:"2%", marginBottom:"5%"}}
            >
              Apply
            </Button>
          </HashLink>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyJSCourse;

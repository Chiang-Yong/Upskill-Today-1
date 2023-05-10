import React, { useState } from "react";
import { Row, Button, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./pathwaydetails.css";

const DOECstyle = {
  main: {
    width: "100%",
    height: "auto",
    display: "block",
    backgroundColor: "#fff9eb",
  },
  button: {
    marginTop: "3%",
    marginBottom: "5%",
  //  backgroundColor: isHover ? "#a60037" : "#ff7b00",
   // borderColor: isHover ? "#a60037" : "",
  //  boxShadow: isHover
   //   ? "0 12px 16px 0 rgba(0, 0, 0, 0.24) 0 17px 50px 0 rgba(0, 0, 0, 0.19)"
   //   : "",
    fontWeight: "600",
    fontSize: "clamp(1.0em, 1.15vw, 1.25em)",
    border: "none",
    borderRadius: "25px",
    outline: "none",
    width: "150px",
    textDecoration: "none",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
  },

  title: {
    color: "#ff7b00",
    fontWeight: 800,
    fontSize: "clamp(1.5rem, 2.0vw, 2.5rem)",
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

const ApplyDevOpsCourse = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const DevOPsButton = {
    button: {
      marginTop: "3%",
      marginBottom: "5%",
      backgroundColor: isHover ? "#a60037" : "#ff7b00",
      borderColor: isHover ? "#a60037" : "",
      boxShadow: isHover
        ? "0 12px 16px 0 rgba(0, 0, 0, 0.24) 0 17px 50px 0 rgba(0, 0, 0, 0.19)"
        : "",
      fontWeight: "600",
      fontSize: "clamp(1.0em, 1.15vw, 1.25em)",
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
    <div style={DOECstyle.main}>
      <Container style={DOECstyle.container} className="rounded-4">
        <Row>
          <h1 style={DOECstyle.title} className="text-center">
            Apply to Our DevOps Track
          </h1>
        </Row>
        <Row className="d-flex justify-content-center pathway">
          <HashLink
            to="/CareerPathway#register"
            smooth
            className="d-flex justify-content-center"
            style={{ textDecoration: "none" }}
          >
            <Button
              style={DevOPsButton.button}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // className="pathway-button"
              // style={{marginTop:"2%", marginBottom:"5%"}}
            >
              Apply Now
            </Button>
          </HashLink>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyDevOpsCourse;

import React from "react";
import { Row, Button, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./pathwaydetails.css"
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
    backgroundColor: "#ff7b00",
    fontWeight: "600",
    border: "none",
    outline: "none",
    width: "150px",
    textDecoration: "none",
  },

  title: {
    marginTop: "5%",
    color: "#000",
    fontWeight: 800,
    fontSize: "clamp(0.8rem, 2vw,2.5rem)",
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
            //style={DOECstyle.button}
            className="pathway-button"
            style={{marginTop:"2%", marginBottom:"5%"}}
            >
              Apply
            </Button>
          </HashLink>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyDevOpsCourse;

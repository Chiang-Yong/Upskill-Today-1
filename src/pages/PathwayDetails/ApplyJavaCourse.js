import React from "react";
import { Row, Button, Container } from "react-bootstrap";


const AJCstyle = {
  main: {
    width: "100%",
    height: "auto",
    display: "block",
    backgroundColor:"#fff9eb",
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
    fontSize: "clamp(0.8rem, 2vw,3rem)",
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

const ApplyJavaCourse = () => {
  return (
    <div style={AJCstyle.main}>
      <Container style={AJCstyle.container} className="rounded-4">
        <Row>
          <h1 style={AJCstyle.title} className="text-center">
            Apply to Our Java Developer Course
          </h1>
        </Row>
        <Row className="d-flex justify-content-center">
          <Button type="submit" style={AJCstyle.button}>
            APPLY
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyJavaCourse;

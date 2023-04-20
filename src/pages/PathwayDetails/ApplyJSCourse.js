import React from "react";
import { Row, Button, Container, Image, Card } from "react-bootstrap";
import FullFrontBack from "../../images/FullFrontBack1.jpg";

const AJSCstyle = {
  main: {
    width: "100%",
    height: "auto",
    display: "block",
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
    color: "#fff",
    fontWeight: 800,
    fontSize: "3rem",
    paddingTop: "55%",
  },

  image: {
    display: "block",
    objectFit: "cover",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },

  container:{
    marginTop:"1%",
    paddingTop:"2%",
    border:"none",
  },
  card: {
    border:"none",
    backgroundColor:"#fff9eb",
  }


};

const ApplyJSCourse = () => {
  return (
    <div style={AJSCstyle.main}>
      <Container style={AJSCstyle.container} className="rounded-4">
        <Row>
          <Card style={AJSCstyle.card}>
            <Card.Img
              src={FullFrontBack}
              style={AJSCstyle.image}
              className="d-flex justify-content-center"
              fluid
            />
            <Card.ImgOverlay>
              <Card.Title>
                <h1 style={AJSCstyle.title} className="text-center">
                  Apply to Our JavaScript Developer Course
                </h1>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <Row className="d-flex justify-content-center">
          <Button type="submit" style={AJSCstyle.button}>
            APPLY
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyJSCourse;

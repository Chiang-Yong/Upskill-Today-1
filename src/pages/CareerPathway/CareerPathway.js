import React from "react";
import { Container, Button, Card, Carousel, Row } from "react-bootstrap";
import Placeholder from "../../images/placeholder.jpg";
import Quiz from "./Quiz";
import RegisterYourInterest from "./RegisterYourInterest";
import BackTopButton from "../../components/BackToTopButton";

const CPStyle = {
  container: {
    paddingTop: "5%",
    backgroundColor: "#fff9eb",
  },

  button: {
    backgroundColor: "#ff7b00",
    color: "#fff",
    border: "none",
    outline: "none",
  },

  card_title: {
    color: "#ff7b00",
    backgroundColor: "#fff9eb",
    fontWeight: 800,
    fontSize: "35px",
  },

  card_text: {
    color: "black",
    fontWeight: 600,
    fontSize: "25px",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  card: {
    width: "18rem",
    padding: "1%",
    marginLeft: "1%",
    marginRight: "1%",
    marginBottom: "5%",
  },
};

const CareerPathway = () => {
  return (
    <>
      <Container style={CPStyle.container} fluid>
        <Row>
          <h1
            className="d-flex justify-content-center"
            style={CPStyle.card_title}
          >
            Career Pathway
          </h1>
          <p
            className="d-flex justify-content-center"
            style={CPStyle.card_text}
          >
            Choose the right career through upskill program
          </p>
        </Row>
        <Row xs={1} md={3} className="g-3 d-flex justify-content-center">
          <Card style={CPStyle.card}>
            <Card.Img
              variant="top"
              src={Placeholder}
              className="rounded mx-0 d-block"
              style={{
                display: " block",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                Javascript Course
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center">
                <Button style={CPStyle.button} href="/JavascriptCourse">
                  Find Out More
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={CPStyle.card}>
            <Card.Img
              variant="top"
              src={Placeholder}
              className="rounded mx-0 d-block"
              style={{
                display: " block",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                Java Course
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center">
                <Button style={CPStyle.button} href="/JavaCourse">
                  Find Out More
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={CPStyle.card}>
            <Card.Img
              variant="top"
              src={Placeholder}
              className="rounded mx-0 d-block"
              style={{
                display: " block",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                DevOps Course
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center">
                <Button style={CPStyle.button} href="/DevOpsCourse">
                  Find Out More
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        {/*} <Button className='me-auto mt-3 mb-3' size="md" href="/pathwaydetails" style={CPStyle.button}>
        Pathway Details
              </Button> */}
        <Row>
          <Quiz />
        </Row>
        <Row>
          <RegisterYourInterest />
        </Row>
      </Container>
      <BackTopButton />
    </>
  );
};

export default CareerPathway;

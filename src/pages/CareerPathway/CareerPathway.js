import React from "react";
import { Container, Button, Card, Row } from "react-bootstrap";
import JavaIcon from "../../images/Java.png";
import JavaScriptIcon from "../../images/Javascript.jfif";
import DevOpsIcon from "../../images/devops.png";
import Quiz from "./Quiz";
import RegisterYourInterest from "./RegisterYourInterest";
import BackTopButton from "../../components/BackToTopButton";
import { Link } from "react-router-dom";
import "./careerpathway.css";

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
    fontWeight: 600,
  },

  card_title: {
    color: "#ff7b00",
    backgroundColor: "#fff9eb",
    fontWeight: 800,
    fontSize: "clamp(1.0rem, 2vw, 2.5rem)",
  },

  card_text: {
    color: "black",
    fontWeight: 700,
    fontSize: "clamp(1.0rem, 2vw, 1.8rem)",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  card: {
    width: "18rem",
    padding: "1%",
    marginLeft: "1%",
    marginRight: "1%",
    marginBottom: "3%",
  },

  Image: {
    objectFit: "contain",
  },
};

const CareerPathway = () => {
  return (
    <>
      <Container className="mt-5" style={CPStyle.container} fluid>
        <Row>
          <h1
            className="d-flex justify-content-center"
            style={CPStyle.card_title}
          ></h1>
          <p
            className="d-flex justify-content-center mt-5"
            style={CPStyle.card_text}
          >
            Choose the right career through upskill program
          </p>
        </Row>
        <Row xs={1} md={3} className="g-3 d-flex justify-content-center">
          <Card style={CPStyle.card} className="rounded-4 card-container">
            <Card.Img
              variant="top"
              src={JavaIcon}
              className="rounded mx-0 d-block"
              style={{
                display: " block",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                Java
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/JavaCourse">
                  <Button
                    // style={CPStyle.button}
                    className="careerpathway-button"
                  >
                    Find Out More
                  </Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={CPStyle.card} className="rounded-4 card-container">
            <Card.Img
              variant="top"
              src={JavaScriptIcon}
              className="rounded mx-0 d-block"
              style={{
                display: " block",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                Javascript
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/JavascriptCourse">
                  <Button
                    //style={CPStyle.button}
                    className="careerpathway-button"
                    //href="/JavascriptCourse"
                  >
                    Find Out More
                  </Button>{" "}
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={CPStyle.card} className="rounded-4 card-container">
            <Card.Img
              variant="top"
              src={DevOpsIcon}
              className="rounded mx-0 d-block"
              style={{
                display: " block",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                DevOps
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/DevOpsCourse">
                  {" "}
                  <Button
                    //style={CPStyle.button}
                    //href="/DevOpsCourse"
                    className="careerpathway-button"
                  >
                    Find Out More
                  </Button>
                </Link>
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
        <Row id="register">
          <RegisterYourInterest />
        </Row>
      </Container>
      <BackTopButton />
    </>
  );
};

export default CareerPathway;

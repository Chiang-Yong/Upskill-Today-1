import React from "react";
import { Container, Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Quiz from "./Quiz";
import RegisterYourInterest from "./RegisterYourInterest";
import BackTopButton from "../../components/BackToTopButton";

import "./careerpathway.css";

import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
//import Pathways from "./Pathways";
import careerPathData from "../CareerPathway/careerPathData";

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
    fontSize: "clamp(1.5rem, 2.0vw, 2.5rem)",
  },

  card_text: {
    color: "black",
    fontWeight: 600,
    fontSize: "clamp(1.0rem, 1.25vw, 1.5rem)",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  slider: {
    width: "60%",
    padding: "1%",
    marginBottom: "3%",
  },

  card: {
    width: "50%",
    padding: "1.0rem",
    marginLeft: "1%",
    marginRight: "1%",
    marginBottom: "3%",
  },

  Image: {
    objectFit: "scale-down",
  },
};

const CareerPathway = () => {
  const settings = {
    //className: "slider variable-width center",
    //variableWidth: true,
    //centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Container className="mt-5" style={CPStyle.container} fluid>
        <Row>
          <p
            className="d-flex justify-content-center mt-5"
            style={CPStyle.card_title}
          >
            Choose the right career through upskill program
          </p>
        </Row>
        <Row sx={1} md={2} className="g-4 d-flex justify-content-center mb-5">
          <Slider {...settings} style={CPStyle.slider}>
            {careerPathData.map((cpData, index) => (
              <Card
                key={index}
                style={CPStyle.card}
                className="careerpathway-image me-3 rounded-4"
              >
                <Card.Img
                  variant="top"
                  src={cpData.image}
                  className="rounded d-block"
                  style={{
                    objectFit: "scale-down",
                    paddingTop: "5%",
                    borderRadius: "50%",
                    border: "3px solid #fff",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={CPStyle.card_text}
                    className="d-flex justify-content-center"
                  >
                    {cpData.title}
                  </Card.Title>
                  <Card.Text
                    style={CPStyle.card_text}
                    className="d-flex justify-content-center"
                  >
                    {cpData.text}
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-center careerpathway">
                    <Link to={cpData.path}>
                      <Button className="careerpathway-button">
                        Find Out More
                      </Button>{" "}
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </Row>
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

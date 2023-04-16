import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutUs from "../../images/AboutUs.jpg";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <Container className="about-section" fluid='ture'>
      <Row>
        <Col>
          <h1 className="about-title">
            <span
              data-text-fill="true"
              style={{
                backgroundImage:
                  "linear-gradient(270deg, rgb(255, 123, 0) 0%, rgb(255, 208, 0) 100%)",
              }}
              className="colorful-text"
            >
              Upskill Today
            </span>
          </h1>
          <p className="about-description">
            An innovative and highly curated ​Hire, Upskill & Deploy Program.
          </p>
        </Col>
      </Row>
      <Row>
        <img
          src={aboutUs}
          alt="Geco Company"
          className="about-section-image"
        ></img>
      </Row>
    </Container>
  );
};

export default AboutUs;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import aboutUs from "../../images/AboutUs.jpg";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <Container fluid className="about-section">
      <Row className="text-center py-5">
        <h1 className="about-title">About Us</h1>

        {/* <Col>
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
        </Col> */}
      </Row>
      <Row className="px-5 py-5 justify-content-center align-items-center">
        <Col lg={10}>
          <Card className="bg-dark text-white text-center">
            <Card.Img src={aboutUs} alt="Geco Company" />
            {/* <Card.ImgOverlay className="px-5">
              <div className="limit px-5">
                <h2 className="fw-bold">
                  “It is not the strongest of species that survives, nor the
                  most intelligent that survives. It is the one that is the most
                  adaptable to change.”
                </h2>
                <h3> - Charles Darwin</h3>
              </div>
            </Card.ImgOverlay> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

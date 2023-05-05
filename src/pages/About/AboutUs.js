import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import aboutUs from "../../images/AboutUsNew.jpg";
import aboutstart from "../../images/about-start-new.png";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <Container fluid className="about-section py-4">
      <Row className="px-5 py-5 align-items-center flex-column-reverse flex-md-row">
        <Col md={{ span: 3, offset: 1 }} className="pe-1">
          <h1 className="fw-bold" style={{ color: "#ff7b00" }}>
            About Upskill Today
          </h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit amet nulla
            nulla pellentesque tincidunt augue .
          </h4>
        </Col>
        <Col md={7}>
          <img
            fluid
            src={aboutstart}
            alt="about-start"
            style={{ height: "auto", width: "100%" }}
          />
        </Col>

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
      {/* <Row className="px-5 py-5  text-center justify-content-center align-items-center">
        <Col lg={10}>
          <img src={aboutUs} alt="Geco Company" />
        </Col>
      </Row> */}
    </Container>
  );
};

export default AboutUs;

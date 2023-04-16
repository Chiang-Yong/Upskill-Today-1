import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./whyupskill.css";
import whyUpskill from "../../images/Why Upskill Today.png";

const WhyUpskill = () => {
  return (
    <Container className="why-upskill d-inline-block" fluid='true'>
      <Row>
        <Col>
        <h1 className="text-center" style={{ color: "#ff7b00" }}>
          Why Upskill Today?
        </h1>
        <p className="text-left">
          Whether you’re a fresh graduates or mid-career switchers looking for a
          breakthrough in your career, Upskilling not only speeds up your
          learning in programming language capabilities but also allows you to
          chart, navigate and grow your career, thus making a complete
          transformation in the shortest possible time.
        </p>
        </Col>
        <Col>
         <img src={whyUpskill} alt="why up<skill?" />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUpskill;

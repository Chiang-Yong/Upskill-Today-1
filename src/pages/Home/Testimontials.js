import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCarousel from "./TestimonialCarousel";
const Testimontials = () => {
  return (
    <Container fluid style={{ backgroundColor: "#fff9eb" }}>
      <Row className="px-5 py-5">
        <Col md={5} className="  text-center align-self-center">
          <h1 className="display-2 fw-bold" style={{ color: "#ff7b00" }}>
            Get Inspired
          </h1>
          <h2 className="display-6">
            View the success stories of our graduates
          </h2>
        </Col>
        <Col md={7}>
          <TestimonialCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimontials;

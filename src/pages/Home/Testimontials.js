import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCarousel from "./TestimonialCarousel";
const Testimontials = () => {
  return (
    <Container fluid>
      <Row className="px-5 py-5">
        <Col md={6}>
          <h1 className="fw-bold" style={{ color: "#ff7b00" }}>
            Get Inspired
          </h1>
          <h3>View the success stories of our graduates</h3>
        </Col>

        <Col md={6}>
          <TestimonialCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimontials;

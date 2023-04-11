import React from "react";
import { Col, Row } from "react-bootstrap";
import TestimonialCarousel from "./TestimonialCarousel";
const Testimontials = () => {
  return (
    <Row>
      <Col md={6}>
        <h1>Get Inspired </h1>
        <h5>testing</h5>
      </Col>
      <Col md={6}>
        <TestimonialCarousel />
      </Col>
    </Row>
  );
};

export default Testimontials;

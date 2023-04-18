import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCarousel from "./TestimonialCarousel";
const Testimontials = () => {
  return (
    <Container fluid>
      <Row className="px-5 py-5">
        <Col md={4} className="  text-center align-self-center">
          <h1 className=" fw-bold">Get Inspired</h1>
          <h3>View the success stories of our graduates</h3>
        </Col>
        <Col md={{ span: 6, offset: 1 }}>
          <TestimonialCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimontials;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCarousel from "./TestimonialCarousel";
const Testimontials = () => {
  return (
    <Container fluid style={{ backgroundColor: "#fff9eb" }}>
      <Row className="px-5 py-5">
        <Col md={5} className="  text-center align-self-center">
          <h1 className=" fw-bold" style={{ color: "#ff7b00", fontSize: 70 }}>
            Get Inspired
          </h1>
          <h3>View the success stories of our graduates</h3>
        </Col>
        <Col md={7}>
          <TestimonialCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimontials;

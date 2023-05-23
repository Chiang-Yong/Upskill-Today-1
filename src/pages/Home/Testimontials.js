import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCarousel from "./TestimonialCarousel";
const Testimontials = () => {
  return (
    <Container fluid style={{ backgroundColor: "#fff9eb" }}>
      <Row className="px-5 py-5 align-items-center">
        <Col md={{ span: 5, offset: 1 }} className=" px-5  ">
          <h1 className=" fw-bold" style={{ color: "#ff7b00" }}>
            Get Inspired
          </h1>
          <h3>View the success stories of our graduates</h3>
        </Col>
        {/* <Col md={{ span: 5, offset: 1 }}> */}
        <Col md={5} className="px-2 text-center">
          <TestimonialCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimontials;

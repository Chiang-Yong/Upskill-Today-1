import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCarousel from "./TestimonialCarousel";
const Testimontials = () => {
  return (
    <Container fluid>
      <Row className="px-5 py-5 align-items-center">
        <Col md={6} className=" px-5 text-center ">
          <h1 className=" fw-bold">Get Inspired</h1>
          <h3>View the success stories of our graduates</h3>
        </Col>
        {/* <Col md={{ span: 5, offset: 1 }}> */}
        <Col md={6} className="px-5 text-center">
          <TestimonialCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimontials;

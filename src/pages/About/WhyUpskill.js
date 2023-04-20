import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./whyupskill.css";
import whyUpskill from "../../images/Why Upskill Today.png";
import { Link } from "react-router-dom";

const WhyUpskill = () => {
  return (
    <Container fluid className="why-upskill py-5 ">
      <Row className="px-5 py-5 align-items-center flex-column-reverse flex-md-row ">
        <Col md={{ span: 5, offset: 1 }} className="pe-5">
          <h1 className="fw-bold mb-3" style={{ color: "#ff7b00" }}>
            We're on a mission to empower people
          </h1>
          <h4 className="lh-md">
            Are you a fresh graduates or mid-career switchers looking for a
            breakthrough in your career?
          </h4>
          <h4 className="lh-md">
            Upskilling not only speeds up your learning in programming language
            capabilities but also allows you to chart, navigate and grow your
            career, thus making a complete transformation in the shortest
            possible time.
          </h4>

          <Link className="text-decoration-none text-white" to="/CareerPathway">
            <Button size="lg" className=" mt-3 ">
              Browse Our Pathways
            </Button>
          </Link>
        </Col>
        <Col md={5}>
          <img
            src={whyUpskill}
            alt="why-upskill"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUpskill;

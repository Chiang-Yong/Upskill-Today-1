import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import aboutwhat from "../../images/about-what.jpeg";
import "./whatIsUpskill.css";
import { Link } from "react-router-dom";

const WhatIsUpSkilled = () => {
  return (
    <Container fluid className="what-upskill py-5">
      <Row className="px-5 py-5 align-items-center ">
        <Col md={{ span: 5, offset: 1 }} className="pe-5">
          <img
            src={aboutwhat}
            alt="what is upskill"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <Col md={5}>
          <h1 className="fw-bold mb-3">We're a company with vision</h1>
          <h4 className="lh-md">
            We are a highly curated talent acquisition and talent retention
            strategy organization.
          </h4>
          <h4 className="lh-md">
            We select top candidates from our extended pool of recent graduates,
            technical professionals with obsolete or soon-to-be deprecated
            technology skills, and mid-career professionals seeking to move to
            Next-Gen technology roles.
          </h4>
          <Link className="text-decoration-none text-white" to="/Corporate">
            <Button size="lg" className=" mt-3 ">
              Explore Our Solutions
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatIsUpSkilled;

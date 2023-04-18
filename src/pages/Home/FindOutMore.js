import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import pathwayhome from "../../images/pathway-home.jpg";
import corporatehome from "../../images/corporate-home.jpg";
import { Link } from "react-router-dom";
import "./findOutMore.css";

const FindOutMore = () => {
  return (
    <Container fluid className="find-out">
      <Row className="px-5 pt-5 pb-1  align-items-center">
        <Col md={6} className="px-5  text-center ">
          <img
            src={pathwayhome}
            alt="why"
            style={{ width: "70%", height: "auto" }}
          />
        </Col>
        <Col md={6} className="px-5 pt-5 text-center">
          <h1 className="fw-bold mb-3  ">Follow Your Passion</h1>

          <h3 className="lh-md">Explore Our Various Career IT Pathways </h3>
          <Link className="text-decoration-none text-white" to="/CareerPathway">
            <Button size="lg" className=" mt-3 more-button">
              Visit Pathways
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="px-5 py-3 align-items-center">
        <Col md={6} className="text-center px-5 pb-5  ">
          <h1 className="fw-bold mb-3">Find Your Match</h1>
          <h3 className="lh-md">Colloborate With Us For Business Solutions</h3>
          <Link className="text-decoration-none text-white" to="/Corporate">
            <Button size="lg" className=" mt-3 more-button">
              View Corporate
            </Button>
          </Link>
        </Col>
        <Col md={6} className="px-5  text-center  ">
          <img
            src={corporatehome}
            alt="corporatehome"
            style={{ width: "70%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FindOutMore;

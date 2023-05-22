import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
//import pathwayhome from "../../images/pathway-home.png";
//import corporatehome from "../../images/corporate-home.png";
import followyourpassion from "../../images/FOLLOW YOUR PASSION.jpg"
import findyourmatch from "../../images/FIND YOUR MATCH.png"

import { Link } from "react-router-dom";
import "./findOutMore.css";

const FindOutMore = () => {
  return (
    <Container fluid className="find-out">
      <Row className="px-5 py-5  align-items-center">
        <Col md={{ span: 5, offset: 1 }} className=" text-center ">
          <img
            src={followyourpassion}
            alt="Follow Your Passion"
            style={{ height: "auto", width: "90%" }}
          />
        </Col>
        <Col md={5} className="px-5 py-5 ">
          <h1 className="fw-bold mb-3" style={{ color: "#ff7b00" }}>
            Follow Your Passion
          </h1>

          <h3 className="lh-md">Explore Our Various Career IT Pathways </h3>
          <Link className="text-decoration-none text-white" to="/CareerPathway">
            <Button size="lg" className=" mt-3 more-button">
              Browse Our Pathways
            </Button>
          </Link>
        </Col>
      </Row>
      <Row
        className="px-5 py-3 align-items-center flex-column-reverse flex-md-row"
        style={{ backgroundColor: " #fff9eb" }}
      >
        <Col md={{ span: 5, offset: 1 }} className="ps-5 pb-5">
          <h1 className="fw-bold mb-3" style={{ color: "#ff7b00" }}>
            Find Your Match
          </h1>
          <h3 className="lh-md">Colloborate With Us For Business Solutions</h3>

          <Link className="text-decoration-none text-white" to="/Corporate">
            <Button size="lg" className=" mt-3 more-button">
              Explore Our Solutions
            </Button>
          </Link>
        </Col>
        <Col md={5} className=" text-center ">
          <img
            src={findyourmatch}
            alt="FIND YOUR MATCH"
            style={{ height: "auto", width: "90%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FindOutMore;

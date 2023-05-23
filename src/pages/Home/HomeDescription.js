import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./homedescription.css";

const HomeDescription = () => {
  return (
    <>
      <Container fluid className="pt-3 home-description">
        <Row className="px-5 py-5">
          <Col md={{ span: 5, offset: 1 }} className="px-5 py-3">
            <h1 className="fw-bold" style={{ color: "#ff7b00" }}>
              We Upskill You For Your First Milestone In Your IT Career
            </h1>
          </Col>
          <Col md={5} className="px-5 py-3">
            <p className="lh-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* <Link className="text-decoration-none text-white" to="/About">
              <Button size="lg" className=" mt-3 home-button">
                About Us
              </Button>
            </Link> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeDescription;

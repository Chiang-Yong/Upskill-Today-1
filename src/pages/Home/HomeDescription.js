import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./homedescription.css";

const HomeDescription = () => {
  return (
    <>
      <Container fluid className="pt-3 home-description">
        <Row className="px-4 py-5 test">
          <Col md={{ span: 5, offset: 1 }} className="px-4 py-3">
            <h1 className="fw-bold" style={{ color: "#ff7b00" }}>
              We Upskill You For Your First Milestone In Your IT Career
            </h1>
          </Col>
          <Col md={5} className="px-4 py-3">
            <p className="lh-sm fs-5">
              We equip you with the skill sets for your first milestone in the evolving tech industry. Upskill Today's unique approach involves placing you in paying jobs while providing you with specific project training, personalised coaching, and mentoring.

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

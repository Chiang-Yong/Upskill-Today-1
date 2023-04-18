import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homedescription.css";

const HomeDescription = () => {
  return (
    <>
      <Container fluid className="pt-5 home-description">
        <Row className="px-5 py-5">
          <Col lg={6} className="px-5 py-3">
            <h1 className="fw-bold">
              We Upskill You For Your First Milestone In Your IT Career
            </h1>
          </Col>
          <Col lg={6} className="px-5 py-3">
            <p className="lh-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              euismod vel tellus et placerat. Quisque justo enim, tincidunt non
              tristique quis, volutpat vulputate elit. Nullam id enim luctus,
              pellentesque sem eget, maximus quam. Vestibulum hendrerit, ante
              quis dapibus
            </p>
            <Link className="text-decoration-none text-white" to="/About">
              <Button size="lg" className=" mt-3 home-button">
                About Us
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeDescription;

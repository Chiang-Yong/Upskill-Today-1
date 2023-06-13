import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import visionMission from "../../images/VisionMission_50.jpg";

import "./visionMission.css";

const VisionMission = () => {
  return (
    <Container fluid className="vision-mission">
      <Row className="px-5 pt-3 pb-5 ">
        <Col md={{ span: 5, offset: 1 }} className="px-4 mb-5">
          <h1 className="fw-bold">Our Vision</h1>
          <h4>
            To create a talent pool for Innovative Digital Transformation
            initiatives, locally.
          </h4>
        </Col>
        <Col md={5} className="px-4 mb-5">
          <h1 className="fw-bold">Our Mission</h1>
          <h4>
            Provide aspiring candidates with a launch pad into a successful and
            well-paid career for Digital Transformation.
          </h4>
        </Col>
        {/* <Col style={{ alignContent: "center", alignItems: "center" }}>
          <img src={visionMission} alt="visionMission" />
        </Col> */}
      </Row>
    </Container>
  );
};

export default VisionMission;

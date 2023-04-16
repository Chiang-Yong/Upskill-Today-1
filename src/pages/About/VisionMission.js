import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import visionMission from "../../images/VisionMission_50.jpg";
import "./visionMission.css";

const VisionMission = () => {
  return (
    <Container className="vision-mission" fluid='true'>
      <Row>
        <Col>
          <h1>Our Vision</h1>
            <p>
              {" "}
              To create a talent pool for Innovative Digital Transformation
              initiatives, Locally.
            </p>
            <h1 style={{ marginTop: "5%" }}>Our Mission</h1>
            <p>
              {" "}
              Provide Aspiring candidates with a launch pad into a successful
              and well-paid career for Digital Transformation.
            </p>
        </Col>
        <Col style={{alignContent:'center', alignItems:"center"}}>
           <img src={visionMission} alt="vision mission" />
        </Col>
      </Row>
    </Container>
  );
};

export default VisionMission;

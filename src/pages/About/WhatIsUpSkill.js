import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WhatIsUpskillToday from "../../images/WhatIsUpskillToday.png";
import "./whatIsUpskill.css";

const WhatIsUpSkilled = () => {
  return (
    <Container fluid className="what-upskill">
      <Row className="px-5 py-5">
        <Col md={{ span: 5, offset: 1 }}>
          <img
            src={WhatIsUpskillToday}
            alt="what is upskill"
            style={{ width: "75%", height: "auto" }}
          />
        </Col>
        <Col md={5} className="justify-content-center align-items-center">
          <h1 className="fw-bold">What is Upskill Today?</h1>
          <h3>
            Upskill Today is a highly curated talent acquisition and talent
            retention strategy. Under this model, we select top candidates from
            our extended pool of recent graduates, technical professionals with
            obsolete or soon-to-be deprecated technology skills, and mid-career
            professionals seeking to move to Next-Gen technology roles.
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatIsUpSkilled;

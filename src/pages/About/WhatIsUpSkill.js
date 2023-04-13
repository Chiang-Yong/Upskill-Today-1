import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WhatIsUpskillToday from "../../images/WhatIsUpskillToday.png"
import "./whatIsUpskill.css";


const WhatIsUpSkilled = () => {
  return (
    <Container className="what-upskill" fluid='ture'>
      <Row>
        <Col>
         <img src={WhatIsUpskillToday} 
         alt="what is upskill"
         />
        </Col>
        <Col style={{alignItems:'center'}}>
          <h1 style={{marginTop:"10%"}}>What is Upskill Today?</h1>
          <p>
          Upskill Today is a highly curated talent acquisition and talent
          retention strategy. Under this model, we select top candidates from
          our extended pool of recent graduates, technical professionals
          with obsolete or soon-to-be deprecated technology skills, and
          mid-career professionals seeking to move to Next-Gen technology roles.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatIsUpSkilled;

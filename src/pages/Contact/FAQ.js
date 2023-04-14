import React from "react";
import FAQData from "./FAQData";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import "./faq.css";

const FAQ = () => {
  return (
    <Container className="faq">
      <h1 className="text-center">Most Frequently Ask Questions</h1>
      {FAQData.faq.map((faq,index) => {
        return (
          <Container className="faq">
            <Accordion flush="true">
              <Accordion.Item eventKey={faq.id}>
                <Row>
                    <Col className="text-center" sm={1}>
                        <h1 className="text-center" style={{color:'black'}}>{index+1}</h1>
                    </Col>
                    <Col sm={11}>
                        <Accordion.Header>{faq.qtn}</Accordion.Header>
                    </Col>
                </Row>
               
                <Accordion.Body>{faq.ans}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        );
      })}
      ;
    </Container>
  );
};

export default FAQ;

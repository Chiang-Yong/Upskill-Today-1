import React from "react";
import FAQData from "./FAQData";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import "./faq.css";

const FAQ = () => {
  return (
    <div className="faq">
      <Container className= "container border rounded-4">
      <h3 className="text-center pt-4 pb-3">Most Frequently Ask Questions</h3>
      {FAQData.map((faq) => {
        return (
          
          <Accordion className="mx-auto" flush key={faq.id}>
            <Accordion.Item eventKey={faq.id}>
              <Row className="text-center justify-content-center border-bottom">
                <Accordion.Header className="accodian-collapse">
                  <h5>{faq.qtn}</h5>
                </Accordion.Header>
              </Row>

              <Accordion.Body className="fs-6">
                {faq.ans1}
                <br />
                {faq.ans2}
                <br />
                {faq.ans3}
                <br />
                {faq.ans4}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          
        );
      })}
      </Container>
    </div>
  );
};

export default FAQ;

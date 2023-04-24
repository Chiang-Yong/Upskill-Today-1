import React from "react";
import FAQData from "./FAQData";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import "./faq.css";

const FAQ = () => {
  return (
    <>
      <Container fluid className="faq-section px-5 py-5">
        <h1 className="text-center pt-5 pb-3 fw-bold">
          Frequently Ask Questions
        </h1>
        <Row className="faq-list justify-content-center align-items-center py-5">
          <Col md={6}>
            <Accordion className="">
              {FAQData.map((faq) => {
                return (
                  <Accordion.Item eventKey={faq.id}>
                    <Accordion.Header className="accordian-collapse">
                      <h5>{faq.qtn}</h5>
                    </Accordion.Header>

                    <Accordion.Body className="fs-6 ">
                      {faq.ans1}
                      <br />
                      {faq.ans2}
                      <br />
                      {faq.ans3}
                      <br />
                      {faq.ans4}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FAQ;

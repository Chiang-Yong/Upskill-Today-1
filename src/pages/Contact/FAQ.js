import React from "react";
import FAQData from "./FAQData";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import "./faq.css";

const FAQ = () => {
  return (
    <Container className="faq">
      <h1 className="text-center pt-5 my-5">Most Frequently Ask Questions</h1>
      {FAQData.map((faq) => {
        return (
          
            <Accordion className="faq mx-auto" flush key={faq.id}>
              <Accordion.Item eventKey={faq.id}>
                <Row className="text-center" 
                  style={{borderColor:'black',borderWidth:'2px'}}>
                    <Col className="text-center" sm={1}>
                        <h2 className="text-center my-2" 
                        style={{color:'black'}}>
                            {faq.id}
                        </h2>
                    </Col>
                    <Col sm={11}>
                        <Accordion.Header className="accodian-collapse" data-bs-toggle="collapse">{faq.qtn}</Accordion.Header>
                    </Col>
                </Row>
               
                <Accordion.Body className="">
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
      ;
    </Container>
  );
};

export default FAQ;

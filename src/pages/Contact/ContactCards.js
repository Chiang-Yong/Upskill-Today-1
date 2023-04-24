import React from "react";
import { Icon } from "react-icons-kit";
import { telephone } from "react-icons-kit/metrize/telephone";
import { socialEmail } from "react-icons-kit/metrize/socialEmail";
import { pinMap } from "react-icons-kit/metrize/pinMap";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

const ContactCards = () => {
  return (
    <>
      <Card className="border-0 rounded-4  mb-3">
        <Row className="g-0 justify-content-center align-items-center">
          <Col md={2} className="">
            <Icon
              fluid
              size={60}
              icon={telephone}
              style={{ color: "#ff7b00" }}
            />
          </Col>
          <Col md={10}>
            <Card.Body>
              <Card.Title className="fw-bold">CALL US</Card.Title>
              <Card.Text className="">+65-1234 5678</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="border-0 rounded-4 mb-3">
        <Row className="g-0 justify-content-center align-items-center">
          <Col md={2} className="">
            <Icon
              fluid
              size={60}
              icon={socialEmail}
              style={{ color: "#ff7b00" }}
            />
          </Col>
          <Col md={10}>
            <Card.Body>
              <Card.Title className="fw-bold">EMAIL US</Card.Title>
              <Card.Text className="">
                <Link to="hello@upskilltoday.com">hello@upskilltoday.com</Link>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="border-0 rounded-4 mb-3">
        <Row className="g-0 justify-content-center align-items-center">
          <Col md={2} className="">
            <Icon size={60} icon={pinMap} style={{ color: "#ff7b00" }} />
          </Col>
          <Col md={10}>
            <Card.Body>
              <Card.Title className="fw-bold">VISIT US</Card.Title>
              <Card.Text className="">
                2 Venture Drive #10-18, Vision Exchange
                <br />
                Singapore 608526
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ContactCards;

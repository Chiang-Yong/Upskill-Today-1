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
      <Card className="border-0 rounded-4 mb-3" style={{ maxWidth: "650px" }}>
        <Row className="g-0 align-items-center">
          <Col md={3} className="me-3">
            <Icon
              fluid
              size={60}
              icon={telephone}
              style={{ color: "#ff7b00", paddingRight: "px" }}
            />
          </Col>
          <Col md={8} className="">
            <Card.Body className="ps-1">
              <Card.Title className="fw-bold">Call Us</Card.Title>
              <Card.Text className="">+65-65603224</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="border-0 rounded-4 mb-3" style={{ maxWidth: "650px" }}>
        <Row className="g-0 align-items-center">
          <Col md={3} className="me-3">
            <Icon
              fluid
              size={60}
              icon={socialEmail}
              style={{ color: "#ff7b00", paddingRight: "px" }}
            />
          </Col>
          <Col md={8}>
            <Card.Body className="ps-1">
              <Card.Title className="fw-bold">Email Us</Card.Title>
              <Card.Text className="">
                <Link to="hello@upskilltoday.com">hello@upskilltoday.com</Link>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="border-0 rounded-4 mb-3" style={{ maxWidth: "650px" }}>
        <Row className="g-0 align-items-center">
          <Col md={3} className="me-3">
            <Icon
              size={60}
              icon={pinMap}
              style={{ color: "#ff7b00", paddingRight: "px" }}
            />
          </Col>
          <Col md={8}>
            <Card.Body className="ps-1">
              <Card.Title className="fw-bold">Visit Us</Card.Title>
              <Card.Text className="">
                2 Venture Drive #10-18,
                <br />
                Vision Exchange
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

import React from "react";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";
import "./getIntouch.css";
import ContactCards from "./ContactCards";

const GetInTouch = () => {
  return (
    <Container fluid className="getintouch py-5">
      <Row className="px-5 py-5">
        <Col md={{ span: 5, offset: 1 }} className="px-5">
          <h1 className="fw-bold mb-3" style={{ color: "#ff7b00" }}>
            Get In Touch
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit facilisis a
            leo nisi, dignissim interdum pharetra tellus malesuada tellus sem.
          </p>
          <ContactCards />
        </Col>

        <Col md={5}>
          <div className="contact-form">
            <Form
              className="  px-4 py-5"
              style={{
                borderColor: "#ff7b00",
                borderRadius: "20px",
              }}
            >
              <Row>
                <Form.Group
                  as={Col}
                  lg={6}
                  className="mb-3"
                  controlId="formBasicName"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group
                  as={Col}
                  lg={6}
                  className="mb-3"
                  controlId="formBasicName"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  lg={6}
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
                <Form.Group
                  as={Col}
                  lg={6}
                  className="mb-3"
                  controlId="formContact"
                >
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder=""
                  rows={4}
                />
              </Form.Group>
              <div className="d-grid mt-3">
                <Button type="submit" size="lg" className="form-button">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInTouch;

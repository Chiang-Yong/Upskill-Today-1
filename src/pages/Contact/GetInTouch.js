import React from "react";
import { Card, Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { phone } from "react-icons-kit/icomoon/phone";
import { mail2 } from "react-icons-kit/icomoon/mail2";
import { location2 } from "react-icons-kit/icomoon/location2";
import { Link } from "react-router-dom";

import "./getIntouch.css";

const GetInTouch = () => {
  return (
    <div className="getintouch">
      <Row>
        <Col sm={5}>
          <Card className="border rounded-4 border-warning">
            <Card.Body>
              <Row>
                <Col sm={2}>
                  <Icon size={64} icon={phone} style={{ color: "#ff7b00" }} />
                </Col>
                <Col sm={10}>
                  <Card.Title className="text-left">CALL US</Card.Title>
                  <Card.Text className="text-left">
                    +65-1234 5678
                    <br />
                    +65-1234 5679
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="border rounded-4 border-warning">
            <Card.Body>
              <Row>
                <Col sm={2}>
                  <Icon size={64} icon={mail2} style={{ color: "#ff7b00" }} />
                </Col>
                <Col sm={10}>
                  <Card.Title className="text-left">EMAIL US</Card.Title>
                  <Card.Text className="text-left">
                    <Link to="hello@upskilltoday.com">
                      hello@upskilltoday.com
                    </Link>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="border rounded-4 border-warning">
            <Card.Body>
              <Row>
                <Col sm={2}>
                  <Icon
                    size={64}
                    icon={location2}
                    style={{ color: "#ff7b00" }}
                  />
                </Col>
                <Col sm={10}>
                  <Card.Title className="text-left">VISIT US</Card.Title>
                  <Card.Text className="text-left">
                    2 Venture Drive #10-18
                    <br />
                    Vision Exchange
                    <br />
                    Singapore 608526
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} >
          <div className="getintouch-form border rounded-4 border-warning" style={{borderColor:"#ff7b00"}}>
            <Form>
              <h1 className="text-center">Get In Touch</h1>
              <Row>
                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a message here"
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
              <div className="text-center">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#ff7b00",
                    fontWeight: "600",
                    border: "none",
                    outline: "none",
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GetInTouch;

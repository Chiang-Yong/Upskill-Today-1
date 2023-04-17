import React from "react";
import { Card, Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { phone } from "react-icons-kit/icomoon/phone";
import { mail2 } from "react-icons-kit/icomoon/mail2";
import { location2 } from "react-icons-kit/icomoon/location2";

import "./getIntouch.css";

const GetInTouch = () => {
  return (
    <div className="getintouch">
      <Card>
        <Card.Body>
          <Icon size={64} icon={phone} style={{ color: "#ff7b00" }} />

          <Card.Title className="text-center">CALL US</Card.Title>
          <Card.Text className="text-left" style={{ marginLeft: "25%" }}>
            +65-1234 5678
            <br />
            +65-1234 5679
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Icon size={64} icon={mail2} style={{ color: "#ff7b00" }} />
          <Card.Title className="text-center">EMAIL US</Card.Title>
          <Card.Text className="text-left" style={{ marginLeft: "25%" }}>
            hello@upskilltoday.com
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Icon size={64} icon={location2} style={{ color: "#ff7b00" }} />
          <Card.Title className="text-center">VISIT US</Card.Title>
          <Card.Text className="text-left" style={{ marginLeft: "25%" }}>
            2 Venture Drive #10-18
            <br />
            Vision Exchange
            <br />
            Singapore 608526
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="getintouch-form border rounded-3">
        <Form>
          <h1 className="text-center">Get In Touch</h1>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>

          <FloatingLabel controlId="floatingTextarea2" label="Message">
            <Form.Control
              as="textarea"
              placeholder="Leave a message here"
              style={{ height: "150px" }}
            />
          </FloatingLabel>

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
        </Form>
      </div>
    </div>
  );
};

export default GetInTouch;

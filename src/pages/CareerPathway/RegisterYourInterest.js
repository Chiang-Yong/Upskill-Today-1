import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const RYIstyle = {
  main: {
    height: "auto",
    width: "100%",
    backgroundColor: "#fff9eb",
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  form: {
    width: "60%",
    paddingBottom: "1%",
    backgroundColor: "rgba(224,178,118,0.1)",
    border: "solid",
    borderColor: "#ff7b00",
    borderWidth: "0.5px",
  },

  group: {
    paddingLeft: "2%",
    paddingRight: "2%",
  },

  select: {
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "1%",
  },

  button: {
    marginTop: "5%",
    marginLeft: "2%",
    backgroundColor: "#ff7b00",
    fontWeight: "600",
    border: "none",
    outline: "none",
  },

  text: {
    marginTop: "2%",
    fontWeight: 600,
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  title: {
    marginTop: "2%",
    color: "#ff7b00",
    fontSize: "3rem",
    fontWeight: 800,
    textShadow: "0px 4px 6px rgba(0,0,0,0.6)",
  },
};

const RegisterYourInterest = () => {
  return (
    <div
      className="d-flex justify-content-center border rounded-3"
      style={RYIstyle.main}
    >
      <Form className="rounded-4 px-5 py-5" style={RYIstyle.form}>
      <h6 className="text-center" style={RYIstyle.text}>
          TAKE YOUR FIRST STEP
        </h6>
        <h1 className="text-center mb-3" style={RYIstyle.title}>
          Register Your Interest Here
        </h1>
        <Row className="mt-5">
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicName"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicName"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            as={Col}
            md={6}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} md={6} className="mb-3" controlId="formContact">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Upskill Program</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Your Upskill Program</option>
            <option value="1">Java</option>
            <option value="2">Javscript</option>
            <option value="3">DevOps</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Country</option>
            <option value="1">Singapore</option>
            <option value="2">Philippines</option>
            <option value="3">Malaysia</option>
          </Form.Select>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" style={RYIstyle.button}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterYourInterest;

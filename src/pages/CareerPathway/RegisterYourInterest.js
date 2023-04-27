import React from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import "./register.css";

const RYIstyle = {
  main: {
    // height: "auto",
    // width: "100%",
    // backgroundColor: "#ffffff",
    // paddingTop: "5%",
    // paddingBottom: "5%",
  },

  form: {
    // width: "60%",
    // paddingBottom: "1%",
    // backgroundColor: "rgba(224,178,118,0.1)",
    // border: "solid",
    // borderColor: "#ff7b00",
    // borderWidth: "0.5px",
  },

  group: {
    // paddingLeft: "2%",
    // paddingRight: "2%",
  },

  select: {
    // paddingLeft: "2%",
    // paddingRight: "2%",
    // paddingTop: "1%",
  },

  button: {
    // marginTop: "5%",
    // marginLeft: "2%",
    // backgroundColor: "#ff7b00",
    // fontWeight: "600",
    // border: "none",
    // outline: "none",
  },

  text: {
    // marginTop: "2%",
    // fontWeight: 600,
    // paddingTop: "1%",
    // paddingBottom: "1%",
    textAlign: "center",
  },

  title: {
    // marginTop: "2%",
    color: "#ff7b00",
    // fontSize: "3rem",
    fontWeight: 800,
    // textShadow: "0px 4px 6px rgba(0,0,0,0.6)",
  },
};

const RegisterYourInterest = () => {
  return (
    <Container fluid className="py-5 px-5">
      <Row className="py-3 justify-content-center align-items-center">
        <Col md={6}>
          <h1 className="text-center" style={RYIstyle.title}>
            Register Your Interest Here
          </h1>
          <p className="text-center pb-4" style={RYIstyle.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare.
          </p>

          <div className="career-form">
            <Form className="py-3" style={RYIstyle.form}>
              <Row>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="formFirstName"
                  className="mb-3"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="formLastName"
                  className="mb-3"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text"/>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  style={RYIstyle.group}
                  as={Col}
                  md="6"
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="formContact"
                  className="mb-3"
                  style={RYIstyle.group}
                >
                  <Form.Label>Contact</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>

              <Form.Group
                as={Col}
                controlId="formProgram"
                className="mb-3"
                style={RYIstyle.select}
              >
                <Form.Label>Select Program</Form.Label>
                <Form.Select aria-label="Default select example">
                 {/* <option>Select Your Upskill Program</option> */} 
                 <option></option>
                  <option value="1">Java</option>
                  <option value="2">Javscript</option>
                  <option value="3">DevOps</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formCountry"
                className="mb-3"
                style={RYIstyle.select}
              >
                <Form.Label>Country</Form.Label>
                <Form.Select aria-label="Default select example">
                 {/*} <option>Select Country</option> */} 
                  <option></option>
                  <option value="1">Singapore</option>
                  <option value="2">Philippines</option>
                  <option value="3">Malaysia</option>
                </Form.Select>
              </Form.Group>
              <div className="d-grid mt-4">
                <Button
                  type="submit"
                  style={RYIstyle.button}
                  className="careerform-button"
                >
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

export default RegisterYourInterest;

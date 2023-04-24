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
    <Container fluid className="py-5">
      <Row className="justify-content-center py-3 ">
        <Col md={6}>
          <h1 className="text-center pb-2" style={RYIstyle.title}>
            Register Your Interest Here
          </h1>
          <p className="text-center pb-4" style={RYIstyle.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare.
          </p>
          <div style={RYIstyle.main} className="career-form">
            <Form className="" style={RYIstyle.form}>
              <Row style={RYIstyle.group}>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  md="6"
                  controlId="formBasicName"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  md="6"
                  controlId="formBasicName"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  // style={RYIstyle.group}
                  className="mb-3"
                  controlId="formBasicEmail"
                  md="6"
                  as={Col}
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group
                  style={RYIstyle.group}
                  as={Col}
                  md="6"
                  controlId="formBasicName"
                  className="mb-3"
                >
                  <Form.Label>Contact</Form.Label>
                  <Form.Control type="text" placeholder="Contact" />
                </Form.Group>
              </Row>

              <Form.Group
                as={Col}
                controlId="formProgramme"
                className="mb-3"
                style={RYIstyle.select}
              >
                <Form.Label>Select Your Upskill Programme</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Programme</option>
                  <option value="1">Java</option>
                  <option value="2">Javscript</option>
                  <option value="3">DevOps</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="careercountry"
                className="mb-3"
                style={RYIstyle.select}
              >
                <Form.Label>Country</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Country</option>
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

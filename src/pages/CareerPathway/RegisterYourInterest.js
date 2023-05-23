import React, { useState } from "react";
import Axios from "axios";
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
    fontSize: "clamp(1.5rem, 2.0vw, 2.5rem)",
    fontWeight: 800,
    // textShadow: "0px 4px 6px rgba(0,0,0,0.6)",
  },
};

const RegisterYourInterest = () => {
  const [validated, setValidated] = useState(false);
  //backend server port
  const port = 5000;

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    program: "",
    country: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    // backend server api endpoint (localhost:5000/api/registration)
    //Axios.post(`http://localhost:${port}/api/registration`, formData)
    Axios.post(
      `https://backend-server-theta.vercel.app/api/registration`,
      formData
    )
      .then((response) => {
        console.log(response.data);
        alert("Your registration has been received.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container fluid className="py-5 px-5">
      <Row className="py-3 justify-content-center align-items-center">
        <Col md={6}>
          <h1 className="text-center" style={RYIstyle.title}>
            Register Your Interest Here
          </h1>
          <p className="text-center pb-4" style={RYIstyle.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>

          <div className="career-form">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="py-3"
              style={RYIstyle.form}
            >
              <Row>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="formFirstName"
                  className="mb-3"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your First Name
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="formLastName"
                  className="mb-3"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="lastname"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your Last Name
                  </Form.Control.Feedback>
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
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="formContact"
                  className="mb-3"
                  style={RYIstyle.group}
                >
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="contact"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your contact number
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group
                as={Col}
                controlId="formProgram"
                className="mb-3"
                style={RYIstyle.select}
              >
                <Form.Label>Select Program</Form.Label>
                <Form.Select
                  required
                  aria-label="Default select example"
                  name="program"
                  onChange={handleChange}
                >
                  {/* <option>Select Your Upskill Program</option> */}
                  <option value="Java Developer">Java Developer</option>
                  <option value="JavaScript Developer">
                    Javscript Developer
                  </option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="Self-Paced (JAVA)">Self-Paced (JAVA)</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select your program{" "}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formCountry"
                className="mb-3"
                style={RYIstyle.select}
              >
                <Form.Label>Country</Form.Label>
                <Form.Select
                  required
                  aria-label="Default select example"
                  name="country"
                  onChange={handleChange}
                >
                  {/*} <option>Select Country</option> */}
                  <option valule="blank"></option>
                  <option value="Singapore">Singapore</option>
                  <option value="Philippines">Philippines</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select your country. Currently, the program is for
                  Singapore and Philippines only.
                </Form.Control.Feedback>
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

import React, { useState } from "react";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";
import Axios from "axios";
import "./getIntouch.css";
import ContactCards from "./ContactCards";
import { validContact, validEmail } from "../../components/Regex";

const GetInTouch = () => {
  //backend server port
  // const port = 5000;
  const [validated, setValidated] = useState(false);
  const [submitResult, setSubmitResult] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [regexErrors, setRegexErrors] = useState({});

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [intouchData, setIntouchData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleChange = (event) => {
    setIntouchData({
      ...intouchData,
      [event.target.name]: event.target.value,
    });
    setRegexErrors({});

    const isFormDataComplete =
      intouchData.lastname.trim() !== "" &&
      intouchData.firstname.trim() !== "" &&
      intouchData.email.trim() !== "" &&
      intouchData.contact.trim() !== "" &&
      intouchData.subject.trim() !== "" &&
      intouchData.message.trim() !== "";

    
    setIsFormComplete(isFormDataComplete);
    if(isFormComplete){
      setValidated(true); //Set the validation on once the form is complete.
    } else {
      setValidated(false)
    }

    if (intouchData.email !== "" || intouchData.contact !== "") {
      const regexErrors = regexValidation();
      
      if (Object.keys(regexErrors).length !== 0) {
        setIsFormComplete(false);
        setValidated(false)
        setRegexErrors(regexErrors);
      } else {
        setRegexErrors({});
      }
    }

    //console.log("Form Data Complete: " + isFormDataComplete);
    //console.log("Form Complete: " + isFormComplete);
    /*
    if (!validContact.test(intouchData.contact)) {
      setContactError(true);
    //  console.log("Contact Error: " + contactError);
    //  console.log("Contact Number after validation: " + intouchData.contact);
      setIsFormComplete(false);
    } else {
      setContactError(false);
      if (!isFormDataComplete) {
        setIsFormComplete(false);
      } else {
        setIsFormComplete(true);
      }

    //  console.log("Contact Error: " + contactError);
    //  console.log("Contact Number: " + intouchData.contact);
    }
*/
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const regexValidation = () => {
    const errors = {};

    if (!validEmail.test(intouchData.email)) {
      errors.email = "Invalid email format";
    }

    if (!validContact.test(intouchData.contact)) {
      errors.contact = "Invalid contact number format";
    }

    if(errors.email === "" && errors.contact === ""){
      for (const key in errors) {
        delete errors[key];
      }
    }

    return errors;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true); //turn on the validation
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setIsFormComplete(form.checkValidity());
    } else {
      setSubmitResult(true);
      //Axios.post(`http://localhost:${port}/api/intouch`, intouchData)
      Axios.post(
        `https://backend-rust-three.vercel.app/api/intouch`,
        intouchData
      )
        .then((response) => {
          console.log(response.data);
          handleServerResponse(
            true,
            "Your message has been successfully submitted. Thank you!"
          );
        })
        .catch((error) => {
          console.error(error);
          handleServerResponse(false, error.response.data.error);
        });
    }
  };

  function submitInfo() {
    //console.log(process.env.REACT_APP_API_URL);
    setSubmitResult(false);
  }

  return (
    <Container fluid className="getintouch py-5">
      <Row className="px-5 py-5">
        <Col md={{ span: 5, offset: 1 }} className="px-5">
          <h1 className="fw-bold mb-3" style={{ color: "#ff7b00" }}>
            Get In Touch
          </h1>
          <p className="mb-3">
            We're excited to hear from you. For more information on how Upskill
            Today can transform your business, contact our team today.
          </p>
          <ContactCards />
        </Col>

        <Col md={5}>
          {!submitResult ? (
            <div className="contact-form">
              <Form
                noValidate
                autoComplete="off"
                validated={validated}
                onSubmit={handleSubmit}
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
                    <Form.Control
                      required
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      onBlur={handleChange}
                      placeholder=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your First Name
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    lg={6}
                    className="mb-3"
                    controlId="formBasicName"
                  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                      placeholder=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your Last Name
                    </Form.Control.Feedback>
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
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      onChange={handleChange}
                      placeholder=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email
                    </Form.Control.Feedback>
                    {regexErrors.email && (
                      <div>
                        <span style={{ color: "red" }}>
                          {regexErrors.email}
                        </span>
                      </div>
                    )}
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    lg={6}
                    className="mb-3"
                    controlId="formContact"
                  >
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      required
                      type="tel"
                      name="contact"
                      onChange={handleChange}
                      onBlur={handleChange}
                      //  onMouseMove={handleChange}
                      placeholder=""
                    />
                    {!isFormComplete && (
                      <Form.Control.Feedback type="invalid">
                        Please provide your contact number
                      </Form.Control.Feedback>
                    )}
                    {intouchData.contact && regexErrors.contact && (
                      <div>
                        <span style={{ color: "red", fontSize: "14px" }}>
                          {regexErrors.contact}
                        </span>
                      </div>
                    )}
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    placeholder=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your subject
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    name="message"
                    onChange={handleChange}
                    placeholder=""
                    rows={4}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please write your message here
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid mt-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="form-button"
                    disabled={!isFormComplete}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          ) : (
            <Card>
              <Card.Body>
                <Card.Text className="fw-bold text-center">
                  {status.info.error && (
                    <div className="error">
                      <span>Error: {status.info.msg}</span>

                      <div style={{ marginTop: "5px" }}>
                        <Button onClick={submitInfo}>
                          Back to Contact Us
                        </Button>
                      </div>
                    </div>
                  )}
                  {!status.info.error && status.info.msg && (
                    <div>
                      <span> {status.info.msg}</span>
                    </div>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GetInTouch;

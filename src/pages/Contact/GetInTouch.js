import React, { useState } from "react";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";
import Axios from "axios";
import "./getIntouch.css";
import ContactCards from "./ContactCards";
import { validContact } from "../../components/Regex";

const GetInTouch = () => {
  //backend server port
  // const port = 5000;
  const [validated, setValidated] = useState(false);
  const [submitResult, setSubmitResult] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);

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

    const isFormDataComplete =
      intouchData.lastname !== "" &&
      intouchData.firstname !== "" &&
      intouchData.email !== "" &&
      intouchData.contact !== "" &&
      intouchData.subject !== "" &&
      intouchData.message !== "";

    //  setIsFormComplete(isFormDataComplete);
    console.log("Form Data Complete: " + isFormDataComplete);
    console.log("Form Complete: " + isFormComplete);

    if (!validContact.test(intouchData.contact)) {
      setContactError(true);
      console.log("Contact Error: " + contactError);
      console.log("Contact Number after validation: " + intouchData.contact);
      setIsFormComplete(false);
    } else {
      setContactError(false);
      if (!isFormDataComplete) {
        setIsFormComplete(false);
      } else {
        setIsFormComplete(true);
      }

      console.log("Contact Error: " + contactError);
      console.log("Contact Number: " + intouchData.contact);
    }

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true); //turn on the validation
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setSubmitResult(true);
      //Axios.post(`http://localhost:${port}/api/intouch`, intouchData)
      Axios.post(
        `https://backend-server-theta.vercel.app/api/intouch`,
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
                      type="text"
                      name="contact"
                      onChange={handleChange}
                      onBlur={handleChange}
                      onMouseMove={handleChange}
                      placeholder=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your contact number
                    </Form.Control.Feedback>
                    {contactError && (
                      <div>
                        <span style={{ color: "red" }}>
                          Invalid contact number! Try again.
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
                          Back to Registration
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

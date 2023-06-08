import React, { useState } from "react";
import Axios from "axios";
import { Form, Col, Row, Button, Container, Card } from "react-bootstrap";
import "./register.css";
import { validContact } from "../../components/Regex";

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
    fontSize: "clamp(1.0rem, 1.15vw, 1.2rem)",
    fontWeight: 600,
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
  const [submitResult, setSubmitResult] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);

  //backend server port
  // const port = 5000;
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    program: "",
    country: "",
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

  const handleChange = async (event) => {
    await setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    const isFormDataComplete =
      formData.lastname !== "" &&
      formData.firstname !== "" &&
      formData.email !== "" &&
      formData.contact !== "" &&
      formData.program !== "" &&
      formData.country !== "";

    setIsFormComplete(isFormDataComplete);
    console.log("Form Complete: " + isFormComplete);
    console.log("contact number before validation = " + formData.contact);

    if (!validContact.test(formData.contact)) {
      setContactError(true);
      console.log("Contact Error: " + contactError);
      console.log("Contact Number after validation: " + formData.contact);
      setIsFormComplete(false);
    } else {
      setContactError(false);
      if (!isFormDataComplete) {
        setIsFormComplete(false);
      } else {
        setIsFormComplete(true);
      }
      console.log("Contact Error: " + contactError);
      console.log("Contact Number: " + formData.contact);
    }

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    //  console.log("Form Check: " + form.checkValidity());
    setValidated(true);
    /*   
    if(!validContact.test(formData.contact)){
      setContactError(true);
      console.log("Contect Error: "+contactError);
      console.log("Contact Number: " + formData.contact)
    }
    else {
      setContactError(false);
    }
*/
    // || contactError === true
    if (form.checkValidity() === false) {
      //   console.log("Inside if condition - Form Check: " + form.checkValidity());
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      setIsFormComplete(form.checkValidity());
    } else {
      setSubmitResult(true);

      //console.log(process.env.REACT_APP_API_URL);

      // backend server api endpoint (localhost:5000/api/registration)
      // Axios.post(`${process.env.REACT_APP_API_URL}/registration`, formData)
      // Axios.post(`http://localhost:${port}/api/registration`, formData)
      Axios.post(
        `https://backend-server-theta.vercel.app/api/registration`,
        formData
      )
        .then((response) => {
          console.log(response.config.data);
          // alert("Your registration has been received.");
          handleServerResponse(
            true,
            "Your registration has been submitted. Thank You!"
          );
        })
        .catch((error) => {
          console.error(error);
          handleServerResponse(false, error.response.data.error);
        });
    }
  };

  function submitInfo() {
    console.log(process.env.REACT_APP_API_URL);
    setSubmitResult(false);
  }
  return (
    <Container fluid className="py-5 px-5">
      <Row className="py-3 justify-content-center align-items-center">
        <Col md={6}>
          <h1 className="text-center" style={RYIstyle.title}>
            Register Your Interest Here
          </h1>
          <p className="text-center pb-4" style={RYIstyle.text}>
            Please fill your contact details below. <br></br>
            Currently, we are hiring in the Philippines and Singapore. <br></br>
            We will archive candidates from other countries for future hiring
          </p>
          {!submitResult ? (
            <div className="career-form">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="py-3"
                style={RYIstyle.form}
                autoComplete="off"
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
                      noValidate
                      required
                      type="tel"
                      // pattern="[0-9]{2,3]-[0-9]{2,4}-[0-9]{2,8}"
                      name="contact"
                     // validationState={contactError ? "error" : "success"}
                      onChange={handleChange}
                      onBlur={handleChange}
                    //  onMouseMove={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your contact number,
                      format:001-1234-12345678
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

                <Form.Group
                  as={Col}
                  controlId="formProgram"
                  className="mb-3"
                  style={RYIstyle.select}
                >
                  <Form.Label>Program Track</Form.Label>
                  <Form.Select
                    required
                    aria-label="Default select example"
                    name="program"
                    onChange={handleChange}
                    onBlur={handleChange}
                    onClick={handleChange}
                   //defaultValue="Java Developer" 
                   >          
                    <option value="">  Select Your Upskill Program</option>
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
                    onBlur={handleChange}
                    onClick={handleChange}
                   // defaultValue="Singapore"
                  >
                    <option value="">Select your country</option>
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
                    // onClick={handleSubmit}
                    style={RYIstyle.button}
                    className="careerform-button"
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

export default RegisterYourInterest;

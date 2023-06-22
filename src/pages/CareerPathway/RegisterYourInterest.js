import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button, Container, Card } from "react-bootstrap";
import "./register.css";
import { validContact, validEmail } from "../../components/Regex";

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
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [regexErrors, setRegexErrors] = useState({});
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
  };

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
  };

  const handleCheckboxChange3 = (event) => {
    setIsChecked3(event.target.checked);
  };

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
    term: "",
    policy: "",
    free: "",
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

    setRegexErrors({});
    const isFormDataComplete =
      formData.lastname.trim() !== "" &&
      formData.firstname.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.contact.trim() !== "" &&
      formData.program !== "" &&
      formData.country !== "" &&
      formData.term !== "" &&
      formData.policy !== "";

    //  console.log('Is form Data complete: ', isFormDataComplete);
    setIsFormComplete(isFormDataComplete);
    // console.log("Outside if statement, is form complete: ", isFormComplete)
    if (isFormDataComplete) {
      setIsFormComplete(true);
      //  console.log("Inside if, Form Complete is: ", isFormComplete);
      setValidated(true);
    } else {
      setValidated(false);
    }

    // console.log("Form Complete: " + isFormComplete);
    // console.log("contact number before validation = " + formData.contact);
    if (formData.email !== "" || formData.contact !== "") {
      const regexErrors = regexValidation();
      if (Object.keys(regexErrors).length !== 0) {
        console.log("Length of RegexErrors: ", Object.keys(regexErrors).length);
        setIsFormComplete(false);
        //  if(!isFormComplete){
        setValidated(false);
        // }

        setRegexErrors(regexErrors);
      } else {
        // setValidated(true)
        setRegexErrors({});
      }
    }

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    setValidated(true); //Turn on the validation

    if (form.checkValidity() === false) {
      //   console.log("Inside if condition - Form Check: " + form.checkValidity());
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      setIsFormComplete(form.checkValidity());
    } else {
      setSubmitResult(true);

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

  const regexValidation = () => {
    const errors = {};

    if (!validEmail.test(formData.email)) {
      errors.email = "Invalid email format";
    } else {
      errors.email = "";
    }

    if (!validContact.test(formData.contact)) {
      errors.contact = "Invalid contact number format";
    } else {
      errors.contact = "";
    }

    if (errors.email === "" && errors.contact === "") {
      for (const key in errors) {
        delete errors[key];
      }
    }

    return errors;
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
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
                      onBlur={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email
                    </Form.Control.Feedback>
                    {regexErrors.email && (
                      <div>
                        <span style={{ color: "red", fontSize: "14px" }}>
                          {regexErrors.email}
                        </span>
                      </div>
                    )}
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
                      type="tel"
                      // pattern="[0-9]{2,3]-[0-9]{2,4}-[0-9]{2,8}"
                      name="contact"
                      // validationState={contactError ? "error" : "success"}
                      onChange={handleChange}
                      onBlur={handleChange}
                      //  onMouseMove={handleChange}
                    />
                    {!isFormComplete && (
                      <Form.Control.Feedback type="invalid">
                        Please provide your contact number
                      </Form.Control.Feedback>
                    )}
                    {formData.contact && regexErrors.contact && (
                      <div>
                        <span style={{ color: "red", fontSize: "14px" }}>
                          {regexErrors.contact}
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
                    <option value=""> Select Your Upskill Program</option>
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
                <Form.Group>
                  <Form.Check
                    id="default-checkbox"
                    required
                    type="checkbox"
                    name="term"
                    label={
                      <span style={{ fontSize: "13px" }}>
                        * I agree to the <Link to="/">Terms & Conditions</Link>
                      </span>
                    }
                    checked={isChecked1}
                    value={isChecked1}
                    onChange={handleCheckboxChange1}
                    onClick={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    This is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    id="default-checkbox"
                    required
                    type="checkbox"
                    name="policy"
                    label={
                      <span style={{ fontSize: "13px" }}>
                        * I give consent for Upskill Today o collect, use and
                        process my personal information set out in this form on
                        matters related to this event and job opportunities.{" "}
                        <Link to="/">View Privacy Policy</Link>
                      </span>
                    }
                    checked={isChecked2}
                    value={isChecked2}
                    onChange={handleCheckboxChange2}
                    onClick={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    This is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    id="default-checkbox"
                    type="checkbox"
                    name="free"
                    label={
                      <span style={{ fontSize: "13px" }}>
                        I'd like to try out FREE Java/JavaScript self-paced learning (14 days)
                      </span>
                    }
                    checked={isChecked3}
                    value={isChecked3}
                    onChange={handleCheckboxChange3}
                    onClick={handleChange}
                  />
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

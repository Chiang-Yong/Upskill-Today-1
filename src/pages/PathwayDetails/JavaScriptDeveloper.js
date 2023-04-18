import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
const src = "https://www.youtube.com/embed/upDLs1sn7g4";

const JSDstyle = {
  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "fff9eb",
  },

  row: {
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  frame: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    },

  form: {
    width: "80%",
  },

  formCol: {
    width: "80%",
    paddingBottom: "2%",
    backgroundColor: "rgba(255,123,0,0.5)",
  },

  button: {
    marginTop: "5%",
    marginLeft: "2%",
    backgroundColor: "#ff7b00",
    fontWeight: "600",
    border: "none",
    outline: "none",
  },

  video:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
  },

  title:{
    fontSize:"35px",
    fontWeight:800,
    color:"#000",
    paddingBottom:"2%",
  },
};
const JavaScriptDeveloper = () => {
  return (
    <div style={JSDstyle.main}>
      
      <Row className="d-flex justify-content-center text-center border border-1" style={JSDstyle.row}>
      <h1 className="text-center" style={JSDstyle.title}>READY TO BE NEXT JAVASCRIPT DEVELOPER</h1>
        <Col style={JSDstyle.video}>
          <iframe
            width="560"
            height="315"
            src={src}
            title="Youtube Player"
            frameborder="0"
            allowFullScreen
            style={JSDstyle.video}
          />
        </Col>
        <Col style={JSDstyle.frame}>
          <div
            style={JSDstyle.formCol}
            className="d-flex justify-content-center border border-1 rounded-3"
          >
            <Form style={JSDstyle.form}>
              <Form.Group className="mb-1" controlId="formBasicName">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicName">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone number (optional)"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button type="submit" style={JSDstyle.button}>
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

export default JavaScriptDeveloper;

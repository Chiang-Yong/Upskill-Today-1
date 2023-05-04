import React from "react";
import { Card, Row } from "react-bootstrap";
import FullStackIcon from "../../images/fullstack.png";
import FrontEndIcon from "../../images/frontend.jfif";
import BackEndIcon from "../../images/backend1.jfif";
import JobRoleFSModal from "./JobRoleFSModal";
import JobRoleFEModal from "./JobRoleFEModal";
import JobRoleBEModal from "./JobRoleBEModal";

const JRStyle = {
  main: {
    width: "100%",
    height: "auto",
    paddingTop: "5%",
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "#ff7b00",
    color: "#fff",
    border: "none",
    outline: "none",
  },

  card_title: {
    color: "black",
    fontWeight: 800,
    fontSize: "clamp(1.8em, 2vw, 2.5em)",
    paddingBottom: "2%",
  },

  card_text: {
    color: "black",
    fontWeight: 600,
    fontSize: "clamp(1.0em, 2vw, 1.3em)",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  card: {
    width: "18rem",
    padding: "1%",
    marginLeft: "1%",
    marginRight: "1%",
    marginBottom: "5%",
    height: "25rem",
  },

  title: {
    color: "black",
    fontWeight: 700,
    fontSize: "clamp(1.5em, 2vw, 2.0rem)",

    marginBottom: "2%",
  },
};

const JobRoles = () => {
  return (
    <div style={JRStyle.main}>
      <h1 className="text-center" style={JRStyle.card_title}>
        JOB ROLES
      </h1>
      <Row xs={1} md={3} className="g-3 d-flex justify-content-center">
        <Card style={JRStyle.card} className="rounded-4">
          <Card.Img
            variant="top"
            src={FullStackIcon}
            className="rounded mx-0 d-block"
            style={{
              display: "block",
              objectFit: "scale-down",
            }}
          />
          <Card.Body >
            <Card.Title style={JRStyle.text} className="d-flex justify-content-center">
              Full Stack Developer
            </Card.Title>
            <Card.Text></Card.Text>
            <Card.Text className="d-flex justify-content-center">
            <JobRoleFSModal />
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={JRStyle.card} className="rounded-4">
          <Card.Img
            variant="top"
            src={FrontEndIcon}
            className="rounded mx-0 d-block"
            style={{
              display: " block",
              objectFit: "scale-down",
            }}
          />
          <Card.Body>
            <Card.Title style={JRStyle.text} className="d-flex justify-content-center">
              Front-End Developer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
            <JobRoleFEModal />
              
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={JRStyle.card} className="rounded-4">
          <Card.Img
            variant="top"
            src={BackEndIcon}
            className="rounded mx-0 d-block"
            style={{
              display: " block",
              objectFit: "scale-down",
            }}
          />
          <Card.Body>
            <Card.Title style={JRStyle.text} className="d-flex justify-content-center">
              Back-End Developer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
            <JobRoleBEModal />
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      
    </div>
  );
};

export default JobRoles;

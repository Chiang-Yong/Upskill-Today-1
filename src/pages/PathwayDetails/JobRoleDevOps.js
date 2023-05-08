import React from "react";
import { Row, Card } from "react-bootstrap";
import JobRoleDevOpsModal from "./JobRoleDevOpsModal";
import DevOpsIcon from "../../images/devops_icon.png";
import "./CareerPathways.css";

const JRDevOpsStyle = {
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
    backgroundColor: "#fff9eb",
    fontWeight: 700,
    fontSize: "clamp(1.8rem, 2vw, 2.8rem)",
  },

  card_text: {
    color: "black",
    fontWeight: 600,
    fontSize: "clamp(1.0em, 2vw, 1.2em)",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  card: {
    width: "18rem",
    padding: "1%",
    marginLeft: "1%",
    marginRight: "1%",
    marginBottom: "5%",
    height: "20rem",
    borderWidth: "1px",
    borderColor: "#ff7b00",
  },

  title: {
    color: "black",
    fontWeight: 800,
    fontSize: "clamp(1.8rem, 2vw, 2.8rem)",

    marginBottom: "2%",
  },
};

const JobRoleDevOps = () => {
  return (
    <div style={JRDevOpsStyle.main}>
      <h1 className="text-center pageTitle" style={JRDevOpsStyle.title}>
        JOB ROLES
      </h1>
      <Row
        xs={1}
        md={3}
        className="g-3 d-flex justify-content-center jobRoleRow"
      >
        <Card style={JRDevOpsStyle.card} className="rounded-4">
          <Card.Img
            variant="top"
            src={DevOpsIcon}
            className="rounded mx-0 d-block"
            style={{
              display: "block",
              objectFit: "scale-down",
              padding: "1%",
            }}
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-center">
              DevOps Engineer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
              <JobRoleDevOpsModal />
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default JobRoleDevOps;

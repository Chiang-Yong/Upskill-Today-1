import React from "react";
import { Row } from "react-bootstrap";
import SelfPaceGuidedTrack from "./SelfPaceGuidedTrack";
import JobRoles from "./JobRoles";
import ApplyDevOpsCourse from "./ApplyDevOPsCourse";
const src = "https://www.youtube.com/embed/8_ju_D_GoQQ";

const DOEstyle = {
  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
  },

  row: {
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  frame: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

  video: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  maintitle: {
    fontSize: "3.0rem",
    fontWeight: 800,
    color: "#ff7b00",
    paddingBottom: "2%",
    paddingTop: "2%",
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: 800,
    color: "#000",
    paddingBottom: "2%",
  },

  text: {
    fontSize: "1.2rem",
    fontWeight: 700,
  },
};
const DevOpsEngineer = () => {
  return (
    <div style={DOEstyle.main}>
      <h1 style={DOEstyle.maintitle} className="text-center">
        DevOps COURSE
      </h1>
      <Row
        className="d-flex justify-content-center text-center border border-1"
        style={DOEstyle.row}
      >
        <h1 className="text-center" style={DOEstyle.title}>
          READY TO BE NEXT DEVOPS ENGINEER
        </h1>
        <p className="text-center" style={DOEstyle.text}>
          Watch the video below
        </p>
        <div style={DOEstyle.video}>
          <iframe
            width="560"
            height="315"
            src={src}
            title="Youtube Player"
            frameborder="0"
          />
        </div>
      </Row>
      <Row>
        <SelfPaceGuidedTrack />
      </Row>
      <Row>
        <JobRoles />
      </Row>
      <Row>
        <ApplyDevOpsCourse />
      </Row>
    </div>
  );
};

export default DevOpsEngineer;

import React from "react";
import { Row } from "react-bootstrap";
import SelfPaceGuidedTrack from "./SelfPaceGuidedTrack";

import ApplyDevOpsCourse from "./ApplyDevOPsCourse";
import JobRoleDevOps from "./JobRoleDevOps";
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

   // Adding media query..
   '@media (max-width: 768px)': {
    video: {
      width:"320px",
      height:"218px",

    }
    
  },
  maintitle: {
    fontSize: "clamp(2.0rem, 2vw, 2.8rem",
    fontWeight: 800,
    color: "#ff7b00",
    paddingBottom: "2%",
    paddingTop: "2%",
  },

  title: {
    fontSize: "clamp(1.8rem, 2vw, 2.8rem)",
    fontWeight: 700,
    color: "#000",
    paddingBottom: "2%",
  },

  text: {
    fontSize: "clampl(1.0rem, 2vw, 1.2rem)",
    fontWeight: 600,
  },
};
const DevOpsEngineer = () => {
  return (
    <div style={DOEstyle.main}>
      <h1 style={DOEstyle.maintitle} className="text-center">
        
      </h1>
      <Row
        className="d-flex justify-content-center text-center"
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
            width="480px"
            height="270px"
            src={src}
            title="Youtube Player"
            
          />
        </div>
      </Row>
      <Row>
        <SelfPaceGuidedTrack />
      </Row>
      <Row>
       <JobRoleDevOps />
      </Row>
      <Row>
        <ApplyDevOpsCourse />
      </Row>
    </div>
  );
};

export default DevOpsEngineer;

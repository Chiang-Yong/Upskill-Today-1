import React from "react";
import { Row } from "react-bootstrap";
import SelfPaceGuidedTrack from "./SelfPaceGuidedTrack";
import JobRoles from "./JobRoles";
import ApplyJavaCourse from "./ApplyJavaCourse";
import JavaCourseDetails from "./JavaCourseDetails";
//const src = "https://www.youtube.com/embed/9yzMKaKcoC0";
const src = "https://www.youtube.com/embed/2UX8bxVhkqw";

const JDstyle = {
  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    paddingTop:"3%",
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
    fontSize: "clamp(2.5rem, 2vw, 2.8rem",
    fontWeight: 800,
    color: "#ff7b00",
    paddingBottom: "2%",
    paddingTop:"2%",
  },

  title: {
    fontSize: "clamp(1.5rem, 2vw, 2.5rem)",
    fontWeight: 700,
    color: "#000",
    paddingBottom: "2%",
  },

  text: {
    fontSize:"clamp(1.0rem, 2vw, 1.2rem)",
    fontWeight:600,

  }
};
const JavaDeveloper = () => {
  return (
    <div style={JDstyle.main} className="mt-5">
        <h1 style={JDstyle.maintitle} className="text-center"></h1>
      <Row
        className="d-flex justify-content-center text-center"
        style={JDstyle.row}
      >
        <h1 className="text-center" style={JDstyle.title}>
          READY TO BE NEXT JAVA DEVELOPER
        </h1>
        <p className="text-center" style={JDstyle.text}>Watch the video below</p>
        <div style={JDstyle.video}>
          <iframe
            width="480"
            height="270"
            src={src}
            title="Youtube Player"
            
          />
        </div>
      </Row>
      <Row>
        <SelfPaceGuidedTrack />
      </Row>
      <Row>
        <JobRoles />
      </Row>
    {/*  <JavaCourseDetails /> */}
      <Row>
        <ApplyJavaCourse />
      </Row>
    </div>
  );
};

export default JavaDeveloper;
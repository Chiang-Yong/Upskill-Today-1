import React from "react";
import { Row } from "react-bootstrap";
import JavaScriptDeveloper from "./JavaScriptDeveloper";
import SelfPaceGuildedTrack from "./SelfPaceGuidedTrack";
import JobRoles from "./JobRoles";
import ApplyJSCourse from "./ApplyJSCourse";
import BackTopButton from "../../components/BackToTopButton";

const JSstyle = {
  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
  },

  breadcrumb: {
    marginLeft: "40%",
  },

  link: {
    textDecoration: "none",
    color: "red",
  },

  title: {
    paddingTop: "5%",
    paddingBottom: "1%",
    color: "#ff7b00",
    fontWeight: 800,
    fontSize: "2.5rem",
  },

  text: {
    fontWeight: 600,
    paddingTop: "2%",
    paddingBottom: "2%",
  },
};

const JavascriptCourse = () => {
  return (
    <div className="justify-content-center mt-5">
      <h1 style={JSstyle.title} className="d-flex justify-content-center">
        
      </h1>
      <Row className="">
        <JavaScriptDeveloper />
      </Row>
      <Row className="">
        <SelfPaceGuildedTrack />
      </Row>
      <Row className="">
        <JobRoles />
      </Row>
      <Row className="">
        <ApplyJSCourse />
      </Row>
      <BackTopButton />
    </div>
  );
};

export default JavascriptCourse;

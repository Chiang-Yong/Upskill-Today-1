import React from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import JavaScriptDeveloper from "./JavaScriptDeveloper";
import SelfPaceGuildedTrack from "./SelfPaceGuidedTrack";
import JobRoles from "./JobRoles";
import ApplyJSCourse from "./ApplyJSCourse";
import { Link } from "react-router-dom";

const JSstyle = {
  main:{
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
  },

  breadcrumb:{
    marginLeft:"40%",
  },

  link:{
    textDecoration:"none",
    color:"red",

  },

  title:{
    paddingTop:"5%",
    paddingBottom: "1%",
    color:"#ff7b00",
    fontWeight:800,
    fontSize:"3rem",
    textShadow:"0 4px 6px rgba(0,0,0,0.6)",
  },

  text:{
    fontWeight:600,
    paddingTop:"2%",
    paddingBottom:"2%",

  }
}

const JavascriptCourse = () => {
  return (
    <div style={JSstyle.main} className="justify-content-center">
       <h1 style={JSstyle.title} className="d-flex justify-content-center">JAVASCRIPT COURSE</h1>
      <Row className="border rounded">
        <JavaScriptDeveloper />
      </Row>
      <Row className="border rounded">  
        <SelfPaceGuildedTrack />
      </Row>
      <Row className="border rounded">  
        <JobRoles />
      </Row>
      <Row className="border rounded">  
        <ApplyJSCourse />
      </Row>
    </div>
  );
};

export default JavascriptCourse;

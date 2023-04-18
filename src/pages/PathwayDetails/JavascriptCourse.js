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
    fontSize:"35px",
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
      <Breadcrumb style={JSstyle.breadcrumb} className="text-decoration-none">
        <Breadcrumb.Item style={JSstyle.link} className="text-center text-decoration-none d-flex justify-content-center"><Link to="/CareerPathway">Career Pathway</Link></Breadcrumb.Item>
        <Breadcrumb.Item className="text-center d-flex justify-content-center" active>JavaScript Course</Breadcrumb.Item>
      </Breadcrumb>

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

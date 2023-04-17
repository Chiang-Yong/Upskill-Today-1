import React from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import JavaScriptDeveloper from "./JavaScriptDeveloper";

const JSstyle = {
  main:{
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
  },

  breadcrumb:{
    marginLeft:"40%",
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
       <h1 style={JSstyle.title} className="d-flex justify-content-center">JavaScript Course</h1>
      <Breadcrumb style={JSstyle.breadcrumb}>
        <Breadcrumb.Item className="text-center d-flex justify-content-center" href="CareerPathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item className="text-center d-flex justify-content-center" active>JavaScript Course</Breadcrumb.Item>
      </Breadcrumb>

      <Row>
        <JavaScriptDeveloper />
      </Row>
    </div>
  );
};

export default JavascriptCourse;

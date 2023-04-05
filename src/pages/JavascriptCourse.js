import React from "react";
import { Breadcrumb } from "react-bootstrap";

const JavascriptCourse = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="career-pathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item href="pathway-details">
          Pathway Details
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Javascript Course</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Javascript Course</h1>
    </div>
  );
};

export default JavascriptCourse;

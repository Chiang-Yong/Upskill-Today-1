import React from "react";
import { Breadcrumb } from "react-bootstrap";

const JavascriptCourse = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="careerpathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item href="pathwaydetails">
          Pathway Details
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Javascript Course</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="d-flex justify-content-center">Javascript Course</h1>
    </div>
  );
};

export default JavascriptCourse;

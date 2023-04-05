import React from "react";
import { Card, Button, Breadcrumb } from "react-bootstrap";

const PathwayDetails = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="career-pathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item active href="pathway-details">
          Pathway Details
        </Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Title>Pathway Details</Card.Title>
        <Card.Text><a href='java-course'>Java Course</a></Card.Text>
        <Card.Text><a href='javascript-course'>Javascript Course</a></Card.Text>
        <Card.Text><a href='devOps-course'>DevOps Course</a></Card.Text>
      </Card>
     {/* <Button size="lg" href="career-pathway">
        Career Pathway
      </Button> */} 
    </div>
  );
};

export default PathwayDetails;

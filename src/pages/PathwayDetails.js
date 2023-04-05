import React from "react";
import { Card, Button, Breadcrumb } from "react-bootstrap";

const PathwayDetails = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="career-pathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item href="pathway-details">
          Pathway Details
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Java</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Title>Pathway Details</Card.Title>
        <Card.Text>Java Pathway</Card.Text>
        <Card.Text>Javascript</Card.Text>
        <Card.Text>DevOps</Card.Text>
      </Card>
      <Button size="lg" href="career-pathway">
        Career Pathway
      </Button>
    </div>
  );
};

export default PathwayDetails;

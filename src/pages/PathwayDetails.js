import React from "react";
import { Card, Button, Breadcrumb } from "react-bootstrap";

const PathwayDetails = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="careerpathway">Career Pathway</Breadcrumb.Item>
        <Breadcrumb.Item active href="pathwaydetails">
          Pathway Details
        </Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Title className='d-flex justify-content-center' style={{color:'#ff7b00'}}>Pathway Details</Card.Title>
        <Card.Text className='d-flex justify-content-center'><a href='javacourse'>Java Course</a></Card.Text>
        <Card.Text className='d-flex justify-content-center'><a href='javascriptcourse'>Javascript Course</a></Card.Text>
        <Card.Text className='d-flex justify-content-center'><a href='devOpscourse'>DevOps Course</a></Card.Text>
      </Card>
     {/* <Button size="lg" href="career-pathway">
        Career Pathway
      </Button> */} 
    </div>
  );
};

export default PathwayDetails;

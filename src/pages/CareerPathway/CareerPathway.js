import React from "react";
import { Container, Button, Card } from "react-bootstrap";

const CPStyle = {
  button: {
    backgroundColor: "#ff7b00",
    color: "#fff",
    border: "none",
    outline: "none",
  },
};

const CareerPathway = () => {
  return (
    <Container>
      <Card>
        <Card.Title className="d-flex justify-content-center fs-2" style={{color:'#ff7b00', backgroundColor:'#000'}}>Career Pathway</Card.Title>
        <Card.Text className="d-flex justify-content-center fs-4">Choose the right career through upskill program</Card.Text>
      </Card>
      <Button className='me-auto mt-3 mb-3' size="md" href="/pathwaydetails" style={CPStyle.button}>
        Pathway Details
      </Button>
    </Container>
  );
};

export default CareerPathway;

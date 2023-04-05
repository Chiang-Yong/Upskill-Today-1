import React from "react";
import { Button, Card } from "react-bootstrap";

const CPStyle = {
  button:{
    backgroundColor:'#ff7b00',
    color:'#fff',
  }
}
const CareerPathway = () => {
  return (
    <div>
      <Card>
        <Card.Title>Career Pathway</Card.Title>
        <Card.Text>Choose the right career through upskill program</Card.Text>
      </Card>
      <Button size='md' href='/pathway-details' style={CPStyle.button}>Pathway Details</Button>

    </div>
  );
};

export default CareerPathway;

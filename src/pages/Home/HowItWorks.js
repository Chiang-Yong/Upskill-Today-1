import React from "react";
import "./HowItWorks.css";
import { Card, CardGroup, Container } from "react-bootstrap";
import HireIcon from "../../images/HireIcon.png";
import TrainIcon from "../../images/TrainIcon.png";
import DeployIcon from "../../images/DeployIcon.png";

const HowItWorks = () => {
  return (
    <Container>
      <CardGroup>
        <Card.Img variant="top" src={HireIcon} />
        <Card>
          <Card.Body>
            <Card.Title>Hire</Card.Title>
            <Card.Text>
              Select top consultants from our pool pf talent to join your
              project
            </Card.Text>
          </Card.Body>
        </Card>
        <Card.Img variant="top" src={TrainIcon} />
        <Card>
          <Card.Body>
            <Card.Title>Train</Card.Title>
            <Card.Text>
              Your selected consultants are upskilled to meet your specific
              skill requirements
            </Card.Text>
          </Card.Body>
        </Card>
        <Card.Img variant="top" src={DeployIcon} />
        <Card>
          <Card.Body>
            <Card.Title>Deploy</Card.Title>
            <Card.Text>
              our consultants will work on your project while being mentored by
              our coaches
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default HowItWorks;

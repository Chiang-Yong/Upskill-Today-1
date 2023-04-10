import React from "react";
import "./howItWorks.css";
import { Col, Row, Card, Container } from "react-bootstrap";
import HireIcon from "../../images/HireIcon.png";
import TrainIcon from "../../images/TrainIcon.png";
import DeployIcon from "../../images/DeployIcon.png";

const HowItWorks = () => {
  return (

    <div className="howitworks-main">
      <Container bg="dark" variant="dark">
        <h1 className="text-center">HOW IT WORKS</h1>
        <p className="text-center fs-4 fw-bold">
          An Investment In Knowledge Pays The Best Interest
        </p>
        <Row xs={1} md={3} className="mx-auto g-4">
          <Col>
            <Card className="ms-auto p-2" style={{height:'18rem',}}>
              <Card.Img
                variant="top"
                src={HireIcon}
                className="rounded mx-auto d-block"
                style={{
                    display:' block',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: '45px',
                    width: '45px',
                    marginTop: '15px',
                    marginBottom: '10px',
                }}
              />
              <Card.Body>
                <Card.Title className="text-center fs-3 fw-bold howitworks-title">
                  Hire
                </Card.Title>
                <Card.Text className="text-center fw-bold"
                  style={{color:'black', fontSize:'18px',}} >
                  Select top consultants from our pool of talent to join your
                  project
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="ms-auto p-2" style={{height:'18rem',}}>
              <Card.Img
                variant="top"
                src={TrainIcon}
                className="howitworks-image rounded mx-auto d-block "
                style={{
                    display:' block',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: '50px',
                    width: '45px',
                    marginTop: '15px',
                    marginBottom: '10px',
                }}
              />
              <Card.Body>
                <Card.Title className="text-center fs-3 fw-bold howitworks-title">
                  Train
                </Card.Title>
                <Card.Text className="text-center fw-bold" 
                style={{color:'black', fontSize:'18px',}}>
                  Your selected consultants are upskilled to meet your specific
                  skill requirements
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="ms-auto p-2" style={{height:'18rem',}}>
              <Card.Img
                variant="top"
                src={DeployIcon}
                className="rounded mx-auto d-block howitworks-image"
                style={{
                    display:' block',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: '50px',
                    width: '45px',
                    marginTop: '15px',
                    marginBottom: '10px',
                    borderRadius:'50%',
                    backgroundColor: 'lightblue',
                }}
              />
              <Card.Body>
                <Card.Title className="text-center fs-3 fw-bold howitworks-title">
                  Deploy
                </Card.Title>
                <Card.Text className="text-center fw-bold"
                  style={{color:'black', fontSize:'18px',}}>
                  Your consultants will work on your project while being
                  mentored by our coaches
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItWorks;

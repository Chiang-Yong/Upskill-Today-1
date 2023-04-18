import React from "react";
import "./statistics.css";
import { Row, Container, Card } from "react-bootstrap";

const Statistics = () => {
  return (
    <div className="statistics py-5">
      <Container fluid>
        <Row className="px-5 py-3 mx-auto justify-content-around ">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="display-4 text-center">97%</Card.Title>
              <Card.Text className="fs-5 text-center">
                of graduates work in the IT sector
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="display-4 text-center">15+</Card.Title>
              <Card.Text className="fs-5 text-center">
                years of delivering excellence
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="display-4 text-center">200K</Card.Title>
              <Card.Text className="fs-5 text-center">
                students in our <br />
                community
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Statistics;

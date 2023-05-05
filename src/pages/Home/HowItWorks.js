import React from "react";
import "./howItWorks.css";
import { Row, Card, Container } from "react-bootstrap";

import Competence from "../../images/competence.png";
import Partner from "../../images/partner.png";
import Order from "../../images/order.png";

const HowItWorks = () => {
  return (
    <Container fluid>
      <Row xs={1} md={3} className="mx-auto  justify-content-evenly px-5 py-5">
        <Card className="border-0 mb-4" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={Order}
            alt="order"
            className="img-fluid rounded mx-auto d-block"
            style={{
              objectFit: "contain",
              textAlign: "center",
              maxHeight: "7rem",
              height: "100%",
            }}
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold ">
              Customized IT Training Programs
            </Card.Title>
            <Card.Text className="text-center">
              Select top consultants from our pool of talent to join your
              project
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className=" border-0 mb-4" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={Competence}
            alt="competence"
            className="img-fluid rounded mx-auto d-block "
            style={{
              objectFit: "contain",
              textAlign: "center",
              maxHeight: "7rem",
              height: "100%",
            }}
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold  ">
              On-The-Job Upskill Training
            </Card.Title>
            <Card.Text className="text-center">
              Your selected consultants are upskilled to meet your specific
              skill requirements
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className=" border-0 mb-4" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={Partner}
            alt="partner"
            className="rounded mx-auto d-block img-fluid"
            style={{
              objectFit: "contain",
              textAlign: "center",
              maxHeight: "7rem",
              height: "100%",
            }}
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold  ">
              Coaching & Mentorship Programs
            </Card.Title>
            <Card.Text className="text-center">
              Your consultants will work on your project while being mentored by
              our coaches
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default HowItWorks;

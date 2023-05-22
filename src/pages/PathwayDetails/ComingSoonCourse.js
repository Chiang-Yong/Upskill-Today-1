import React from "react";
import { Card, CardImg, Row } from "react-bootstrap";

import BackTopButton from "../../components/BackToTopButton";
import comingSoonData from "./comingSoonData";

const CSCstyle = {
  card: {
    width: "20rem",
    borderRadius: "20px",
    borderColor: "#ff7b00",
    borderWidth: "2px",
  },

  title: {
    color: "#ff7b00",
    fontSize: "clamp(1.5rem, 2.0vw, 2.5rem)",
    fontWeight: 800,
  },

  text: {
    fontSize: "clamp(1.0rem, 1.15vw, 1.2rem)",
    fontWeight: 600,
  },

  header: {
    fontSize: "clamp(1.1rem, 1.3vw, 1.5rem)",
    fontWeight: 700,
  },
};

const ComingSoonCourse = () => {
  return (
    <div className="mt-5 pt-5">
      <h1 className="text-center mt-5 pb-3" style={CSCstyle.title}>
        Coming Soon Opportunities
      </h1>
      <Row
        sx={1}
        md={2}
        className="g-3 d-flex justify-content-center mt-5 mb-5"
      >
        {comingSoonData.map((csData, index) => (
          <Card key={index} style={CSCstyle.card} className="me-4">
            <CardImg
              variant="top"
              src={csData.image}
              className="rounded d-block"
              style={{
                display: "block",
                objectFit: "scale-down",
                paddingTop: "5%",
              }}
            ></CardImg>
            <Card.Body>
              <Card.Title style={CSCstyle.header}>{csData.title}</Card.Title>
              <Card.Text style={CSCstyle.text}>{csData.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>

      <BackTopButton />
    </div>
  );
};

export default ComingSoonCourse;

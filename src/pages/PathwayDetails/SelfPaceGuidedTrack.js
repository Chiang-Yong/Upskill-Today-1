import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import SoftUni from "../../images/SoftUni.png";
import GuidedTrack from "../../images/GuildedTrack.png";

const SPGTstyle = {
  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
  },

  card: {
    width: "18rem",
    height: "25rem",
    padding: "1%",
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: "1%",
    marginRight: "1%",
    border: "solid",
    borderWidth: "1px",
    borderColor: "#ff7b00",
    borderRadius: "5%",
  },

  image: {
    display: "block",
    justifyContent: "center",
    objectFit: "scale-down",
  },

  cardtitle: {
    fontWeight: 800,
    fontSize: "1.5rem",
    color: "black",
    paddingTop: "5%",
  },

  title: {
    fontWeight: 800,
    fontSize: "3rem",
    textShadow: "0 4px 6px rgba(0,0,0,0.6)",
    color: "#ff7b00",
    paddingTop: "2%",
    marginBottom: "2%",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "2%",
    marginBottom: "5%",
    backgroundColor: "#ff7b00",
    fontWeight: "600",
    border: "none",
    outline: "none",
  },
};

const SelfPaceGuidedTrack = () => {
  return (
    <div style={SPGTstyle.main}>
      <h1 className="text-center" style={SPGTstyle.title}>
        TWO PATHWAYS
      </h1>
      <Row xs={1} md={3} className="g-3 d-flex justify-content-center">
        <Card style={SPGTstyle.card}>
          <Card.Title className="text-center" style={SPGTstyle.cardtitle}>
            Self-Paced Pathway
          </Card.Title>
          <Card.Img style={SPGTstyle.image} src={SoftUni}></Card.Img>
          <div className="d-flex justify-content-center">
            <Button type="submit" style={SPGTstyle.button}>
              Click For More Info
            </Button>
          </div>
        </Card>

        <Card style={SPGTstyle.card}>
          <Card.Title className="text-center" style={SPGTstyle.cardtitle}>
            Guided Track Pathway
          </Card.Title>
          <Card.Img style={SPGTstyle.image} src={GuidedTrack}></Card.Img>
          <div className="d-flex justify-content-center">
            <Button type="submit" style={SPGTstyle.button}>
              Click For More Info
            </Button>
          </div>
        </Card>
      </Row>
    </div>
  );
};

export default SelfPaceGuidedTrack;

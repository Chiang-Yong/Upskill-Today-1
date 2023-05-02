import React from "react";
import { Row, Card } from "react-bootstrap";
import SoftUni from "../../images/SoftUni.png";
import GuidedTrack from "../../images/GuildedTrack.png";
import SelfPacedModal from "./SelfPacedModal";
import SPGuidedTrackModal from "./SPGuidedTrackModal";

const SPGTstyle = {
  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
  },

  card: {
    width: "20rem",
    height: "26rem",
    padding: "1%",
    marginTop: "3%",
    marginBottom: "2%",
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
    fontWeight: 700,
    fontSize: "clamp(1.5rem,2vw,2.0rem)",
    color: "black",
    paddingTop: "2%",
  },

  title: {
    fontWeight: 700,
    fontSize: "clamp(1.8em, 2vw, 2.5rem)",
    color: "black",
    paddingTop: "2%",
    marginBottom: "1%",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "2%",
    backgroundColor: "#ff7b00",
    fontWeight: "600",
    border: "none",
    outline: "none",
    marginBottom: "2%",
  },
};


const SelfPaceGuidedTrack = () => {
  return (
    <div style={SPGTstyle.main}>
      <h1 className="text-center" style={SPGTstyle.title}>
        TWO PROGRAM TRACKS
      </h1>
      <Row xs={1} md={2} className="g-2 d-flex justify-content-center">
        <Card style={SPGTstyle.card}>
          <Card.Title className="text-center" style={SPGTstyle.cardtitle}>
            Self-Paced Track
          </Card.Title>
          <Card.Img style={SPGTstyle.image} src={SoftUni}></Card.Img>
          <div className="d-flex justify-content-center" style={{marginBottom:"5%"}}>
          <SelfPacedModal />
          </div>
        </Card>

        <Card style={SPGTstyle.card}>
          <Card.Title className="text-center" style={SPGTstyle.cardtitle}>
            Guided Track
          </Card.Title>
          <Card.Img style={SPGTstyle.image} src={GuidedTrack}></Card.Img>
          <div className="d-flex justify-content-center">
          <SPGuidedTrackModal />
          </div>
          
        </Card>
      </Row>
    </div>
  );
};

export default SelfPaceGuidedTrack;

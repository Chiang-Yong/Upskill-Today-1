import React from "react";
import { Row, Card, Button, Popover, OverlayTrigger } from "react-bootstrap";
import SoftUni from "../../images/SoftUni.png";
import GuidedTrack from "../../images/GuildedTrack.png";

const SPGTstyle = {
  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
  },

  card: {
    width: "22rem",
    height: "28rem",
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
    fontWeight: 800,
    fontSize: "1.5rem",
    color: "black",
    paddingTop: "5%",
  },

  title: {
    fontWeight: 800,
    fontSize: "3rem",
    color: "#ff7b00",
    paddingTop: "2%",
    marginBottom: "2%",
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

const popoverSP = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">SELF-PACED PATHWAY</Popover.Header>
    <Popover.Body>
      For Self-paced Track*, the subscription fee is SGD99 per month. On
      average, it takes 4-6 months to complete if study full-time and 8-9 months
      if study part-time. The total fee is roughly 30% of your first month
      salary. 97% of 200,000 students have found IT jobs post training. *
      Currently, Self-paced Track is available under Java Developer and
      Javascript Developer Tracks.
    </Popover.Body>
  </Popover>
);

const popoverGT = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">GUIDED TRACK PATHWAY</Popover.Header>
    <Popover.Body>
      For Guided Track*, there will be trainer and mentor to guide you during
      the training. You will be given assignment and capstone project. Once you
      pass the technical test and you are ready for deploy.
    </Popover.Body>
  </Popover>
);

const SelfPaceGuidedTrack = () => {
  return (
    <div style={SPGTstyle.main}>
      <h1 className="text-center" style={SPGTstyle.title}>
        TWO PATHWAYS
      </h1>
      <Row xs={1} md={2} className="g-2 d-flex justify-content-center">
        <Card style={SPGTstyle.card}>
          <Card.Title className="text-center" style={SPGTstyle.cardtitle}>
            Self-Paced Pathway
          </Card.Title>
          <Card.Img style={SPGTstyle.image} src={SoftUni}></Card.Img>
          <div className="d-flex justify-content-center">
          <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popoverSP}
              >
            <Button type="submit" style={SPGTstyle.button}>
              Click For More Info
            </Button>
            </OverlayTrigger>
          </div>
        </Card>

        <Card style={SPGTstyle.card}>
          <Card.Title className="text-center" style={SPGTstyle.cardtitle}>
            Guided Track Pathway
          </Card.Title>
          <Card.Img style={SPGTstyle.image} src={GuidedTrack}></Card.Img>
          <div className="d-flex justify-content-center">
          <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popoverGT}
              >
            <Button type="submit" style={SPGTstyle.button}>
              Click For More Info
            </Button>
            </OverlayTrigger>
          </div>
        </Card>
      </Row>
    </div>
  );
};

export default SelfPaceGuidedTrack;

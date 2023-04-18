import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import SoftUni from "../../images/SoftUni.png";
import GuildedTrack from '../../images/GuildedTrack.png'

const SPGTstyle = {
  main: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff9eb",
  },

  row: {
    marginTop:"3%",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginBottom:"3%",
  },

  card: {
    width: "90%",
    backgroundColor: "rgba(255,123,0,0.5)",
    marginTop: "5%",
  },

  image: {
    display:"flex",
    justifyContent:"center",
    objectFit: 'scale-down'
  },

 

  title: {
    fontWeight:800,
    fontSize:"35px",
    color:"black",
    paddingTop: "5%",
    marginBottom:"2%",
    

  },

  button: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
   // marginTop: "2%",
    marginBottom: "5%",
    backgroundColor: "#ff7b00",
    fontWeight: "600",
    border: "none",
    outline: "none",
  },
};

const SelfPaceGuildedTrack = () => {
  return (
    <div style={SPGTstyle.main}>
      <Row style={SPGTstyle.row} className="d-flex text-center justify-content-center">
        <Col className="d-flex text=center justify-content-center">
          <Card style={SPGTstyle.card}>
            <Card.Title className="text-center" style={SPGTstyle.title}>Self-Paced Pathway</Card.Title>
            <Card.Img style={SPGTstyle.image} src={SoftUni}></Card.Img>
            <div className="d-flex justify-content-center">
              <Button type="submit" style={SPGTstyle.button}>
                Click For More Info
              </Button>
            </div>
          </Card>
        </Col>
        <Col className="d-flex text-center justify-content-center">
          <Card style={SPGTstyle.card}>
            <Card.Title className="text-center" style={SPGTstyle.title}>
              Guilded Track Pathway
            </Card.Title>
            <Card.Img style={SPGTstyle.image} src={GuildedTrack}></Card.Img>
            <div className="d-flex justify-content-center">
              <Button type="submit" style={SPGTstyle.button}>
                Click For More Info
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SelfPaceGuildedTrack;

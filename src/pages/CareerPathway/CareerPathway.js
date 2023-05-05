import React from "react";
import { Container, Button, Card, Row } from "react-bootstrap";
import JavaIcon from "../../images/Java.png";
import JavaScriptIcon from "../../images/Javascript.png";
import DevOpsIcon from "../../images/devops.png";
import Pega from "../../images/pega.png";
import BusinessAnalyst from "../../images/business-analyst.png";
import DataAnalyst from "../../images/data-analytics.png";
import SiteCore from "../../images/sitecore.png"
import Quiz from "./Quiz";
import RegisterYourInterest from "./RegisterYourInterest";
import BackTopButton from "../../components/BackToTopButton";
import { Link } from "react-router-dom";
import "./careerpathway.css";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
//import Pathways from "./Pathways";


const CPStyle = {
  container: {
    paddingTop: "5%",
    backgroundColor: "#fff9eb",
  },

  button: {
    backgroundColor: "#ff7b00",
    color: "#fff",
    border: "none",
    outline: "none",
    fontWeight: 600,
  },

  card_title: {
    color: "#ff7b00",
    backgroundColor: "#fff9eb",
    fontWeight: 800,
    fontSize: "clamp(1.5rem, 2vw, 2.5rem)",
  },

  card_text: {
    color: "black",
    fontWeight: 600,
    fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  slider:{
    width: "60%",
    padding: "1%",
    marginBottom: "3%",
  },

  card: {
    width: "50%",
    padding: "1rem",
    marginLeft: "1%",
    marginRight: "1%",
    marginBottom: "3%",
  },

  Image: {
    objectFit: "scale-down",
  },
};

const CareerPathway = () => {
  
    const settings = {
      //className: "slider variable-width center",
      //variableWidth: true,
      //centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            
          }
        }
      ]

    }
    
  return (
    <>
      <Container className="mt-5" style={CPStyle.container} fluid>
        <Row>
          <p
            className="d-flex justify-content-center mt-5"
            style={CPStyle.card_text}
          >
            Choose the right career through upskill program
          </p>
        </Row>
      <Row sx={1} md={2} className="g-4 d-flex justify-content-center mb-5">  
          <Slider {...settings} style={CPStyle.slider}>
          <Card style={CPStyle.card} className="me-3 rounded-4">
            <Card.Img
              variant="top"
              src={JavaScriptIcon}
              className="rounded d-block"
              style={{
                objectFit: "scale-down",
                paddingTop: "5%",
                }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                Javascript
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/JavascriptCourse">
                  <Button 
                  className="careerpathway-button"
                  >
                    Find Out More
                  </Button>{" "}
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={CPStyle.card} className="me-3 rounded-4">
            <Card.Img
              variant="top"
              src={JavaIcon}
              className="rounded d-block"
              style={{
                display: "block",
                objectFit: "scale-down",
                paddingTop: "5%",

              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                Java
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/JavaCourse">
                  <Button 
                  className="careerpathway-button"
                  >Find Out More</Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={CPStyle.card} className="me-3 rounded-4">
            <Card.Img
              variant="top"
              src={DevOpsIcon}
              className="rounded d-block"
              style={{
                display: "block",
                objectFit: "scale-down",
                paddingTop: "5%",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                DevOps
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/DevOpsCourse">
                  {" "}
                  <Button 
                    className="careerpathway-button"
                  >
                    Find Out More
                  </Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={CPStyle.card} className="me-3 rounded-4">
            <Card.Img
              variant="top"
              src={Pega}
              className="rounded d-block"
              style={{
                display: "block",
                objectFit: "scale-down",
                paddingTop: "5%",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                PEGA
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/ComingSoonCourse">
                  {" "}
                  <Button 
                  className="careerpathway-button"
                  >
                    Find Out More
                  </Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={CPStyle.card} className="me-3 rounded-4">
            <Card.Img
              variant="top"
              src={BusinessAnalyst}
              className="rounded d-block"
              style={{
                display: "block",
                objectFit: "scale-down",
                paddingTop: "5%",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                Business Analyst 
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/BusinessAnalystCourse">
                  {" "}
                  <Button 
                   className="careerpathway-button"
                  >
                    Find Out More
                  </Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={CPStyle.card} className="me-3 rounded-4">
            <Card.Img
              variant="top"
              src={DataAnalyst}
              className="rounded mx-0 d-block"
              style={{
                display: "block",
                objectFit: "scale-down",
                paddingTop: "5%",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                Data Analyst
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/ComingSoonCourse">
                  {" "}
                  <Button 
                  className="careerpathway-button"
                  >
                    Find Out More
                  </Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={CPStyle.card} className="me-3 rounded-4">
            <Card.Img
              variant="top"
              src={SiteCore}
              className="rounded mx-0 d-block"
              style={{
                display: "block",
                objectFit: "scale-down",
                paddingTop: "5%",
              }}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
                Sitecore
              </Card.Title>
              <Card.Text className="d-flex justify-content-center"></Card.Text>
              <Card.Text className="d-flex justify-content-center careerpathway">
                <Link to="/PathwayDetails/ComingSoonCourse">
                  {" "}
                  <Button 
                  className="careerpathway-button"
                  >
                    Find Out More
                  </Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Slider> 
     </Row> 
           
        <Row>
          <Quiz />
        </Row>
        <Row id="register">
          <RegisterYourInterest />
        </Row>
      </Container>
      <BackTopButton />
    </>
  );
};

export default CareerPathway;

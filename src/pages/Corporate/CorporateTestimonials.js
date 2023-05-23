import React from "react";
import "./corporateTestimonials.css";
import { Row, Card, Container } from "react-bootstrap";

//import accenture from "../../images/accenture.png";
//import Infosys from "../../images/Infosys.png";
//import daimler from "../../images/daimler.png";

const CorporateTestimonials = () => {
  return (
    <Container fluid className="corporateTestimonials">
      <h1 className="corporateTestimonials-title"> Testimonials</h1>

      <Row xs={1} md={3} className="mx-auto  justify-content-evenly px-3 py-3">
        <Card className=" mb-4" style={{ paddingTop: "3%" }}>
         {/* <Card.Img
            variant="top"
            src={accenture}
            className="img-fluid rounded mx-auto d-block"
            style={{
              objectFit: "contain",
              textAlign: "center",
              maxHeight: "4rem",
              height: "100%",
            }}
          />
          */} 
          <Card.Body>
          <Card.Text className="text-center">
              Regional Manager <br />
              Large Technology MNC 
            </Card.Text>
            <Card.Text className="text-center fw-bold">
              "The Account Manager is very responsive and the consultants always
              meet the project requirements. The services of Upskill Today are
              vital advantage to our professional services team and would highly
              recommend Upskill Today to other technology companies."
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className=" mb-4">
       {/*   <Card.Img
            variant="top"
            src={Infosys}
            className="img-fluid rounded mx-auto d-block "
            style={{
              objectFit: "contain",
              textAlign: "center",
              maxHeight: "2.5rem",
              height: "100%",
            }}
          />
          */} 
          <Card.Body>
            <Card.Text className="text-center">
              CEO <br />
              Cloud Transformation Solution Company
            </Card.Text>
            <Card.Text className="text-center fw-bold">
              "We have a good relationship with Upskill Today. With Upskill
              Today, we have an assurance on Quality, Performance and
              competitive commercial engagement mode. Upskill Today to us means
              excellent followup and execution."
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className=" mb-4">
          {/*<Card.Img
            variant="top"
            src={daimler}
            className="rounded mx-auto d-block img-fluid"
            style={{
              objectFit: "contain",
              textAlign: "center",
              maxHeight: "1.5rem",
              height: "100%",
            }}
          /> */}
          <Card.Body>
            <Card.Text className="text-center">
              Service Delivery Manager <br />
              MNC IT Services Company
            </Card.Text>
            <Card.Text className="text-center fw-bold">
              "Very responsive and open to engage in ac competitive market.
              Upskill Today provides us with a vital advantage to service our
              projects. Highly appreciate the speed of response to our project
              requets and Upskill Today's flexible engagement model. Would
              definitely recommend Upskill Today to my business partner."
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CorporateTestimonials;

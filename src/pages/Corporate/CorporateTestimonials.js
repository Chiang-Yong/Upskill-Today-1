import React from "react";
import "./corporateTestimonials.css";
import { Row, Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "../CareerPathway/slick.css";
import "../CareerPathway/slick-theme.css";
import TestimonialsData from "../Corporate/CorporateTestimonialsData";

//import accenture from "../../images/accenture.png";
//import Infosys from "../../images/Infosys.png";
//import daimler from "../../images/daimler.png";

const CorporateTestimonials = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    lazyload: true,
    centerPadding: 0,
    speed: 500,
    slidesToShow: 2.355,
    //slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
       //   arrows: true,
       //   dots: true,
       //   centerMode: true,
        },
      },
    ],
  };

  return (
    <Container fluid className="corporateTestimonials mb-4">
      <h1 className="corporateTestimonials-title"> Testimonials</h1>
      <Row xs={1} className="mx-auto justify-content-evenly">
        <Slider {...settings} className="media">
          {TestimonialsData.map((data,index)=> (
        
         <Card key={index} className=" mb-2" style={{ paddingTop: "5px" }}>
            <Card.Body>
              <Card.Text className="text-center">
                <p className="fw-bold">{data.title} <br />
                {data.company}</p>
              </Card.Text>
              <Card.Text className="cust-text text-start">
               {data.content}
              </Card.Text>
            </Card.Body>
          </Card>
         
          ))}
        </Slider>
       </Row>
    </Container>
  );
};

export default CorporateTestimonials;

import React from "react";
import "./testimonialcarouselCorp.css";
import TestimonialsData from "../Corporate/CorporateTestimonialsData";
import { Carousel, Col } from "react-bootstrap";

const TestimonialCarouselCorp = () => {
  return (
    <Carousel variant="dark" fade className="testimonial-corp py-5 px-2 mx-auto">
      {TestimonialsData.map((data,index)=>(
      <Carousel.Item className="text-center" key={index}>
        <div className="d-flex justify-content-center mx-auto">
          <Col sm={7}>
            <h4 className="mb-1 fw-bold">{data.title}</h4>
            <h5 className="mb-3 fw-bold">{data.company}</h5>
            <p className="text-muted text-start">
              {data.content}
            </p>
          </Col>
        </div>
      </Carousel.Item>
      ))}
      
    </Carousel>
  );
};

export default TestimonialCarouselCorp;

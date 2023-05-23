import React from "react";
import "./testimonialcarousel.css";

import kevin from '../../images/kevin.png'
import arvin from '../../images/arvin.png'
import giovani from '../../images/giovani.png'

// import openquote from "../../images/open-quote.svg";
// import closequote from "../../images/close-quote.svg";
import { Carousel, Col } from "react-bootstrap";

const TestimonialCarousel = () => {
  return (
    <Carousel variant="dark" fade className="testimonial-home py-5 px-2">
      <Carousel.Item className="text-center">
        <img
          className="rounded-circle shadow-1-strong mb-4"
         // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
          src={arvin}
          alt="Arvin"
          style={{ width: "150px" }}
        />
        <div className="d-flex justify-content-center">
          <Col lg={8}>
            <h5 className="mb-3">Arvin Tiongson</h5>
            <p>Peoplesoft Technical Consultant</p>
            <p className="text-muted text-start">
              As for someone who came from an Application Support/Functional
              Team, I am not given enough time to practice and improve my
              Technical / Programming skills in using Peoplesoft before. With
              Skills Xcelerator program for PeopleSoft Campus Solutions, I am
              not just able to remember what I had been taught before but also
              was able to learn new things like functions, techniques, tips,
              etc. The program is truly helpful in many ways and I know many
              employees will also appreciate and benefit from this in the
              future.
            </p>
          </Col>
        </div>
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img
          className="rounded-circle shadow-1-strong mb-4"
         // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
          src={giovani}
          alt="Giovani"
          style={{ width: "150px" }}
        />
        <div className="d-flex justify-content-center">
          <Col lg={8}>
            <h5 className="mb-3">Giovani Campos</h5>
            <p>PeopleSoft Trainer</p>
            <p className="text-muted text-start">
              The thing that amazes me about this program is the knowledge
              gained in a short amount of time is breathtaking. Training was
              done within 8 weeks. The team received their certificate of
              completion – and already to be immersed in a customer project. So
              to all those who have that eagerness and devotion to learn despite
              the difficult climb, this program is for you. “Nothing is
              difficult if you love doing it”. If you love to learn, love to
              take yourself to another level, love the grind, love the challenge
              – Upskilling is a piece of cake
            </p>
          </Col>
        </div>
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img
          className="rounded-circle shadow-1-strong mb-4"
         // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          src={kevin}
          alt="kevin"
          style={{ width: "150px" }}
        />
        <div className="d-flex justify-content-center">
          <Col lg={8}>
            <h5 className="mb-3">Kevin Chan</h5>
            <p>Senior Business Analyst</p>
            <p className="text-muted text-start">
              Joining upskilling program has allowed me to learn Java and
              fast-track my career progression from Fashion to IT with no coding
              knowledge. My prior experiences are appreciated here and being
              able to be trained on the job with industry professionals has been
              an exceedingly rewarding journey. Through upskilling, I hope to
              continue to stay relevant to ever-changing world we live in.
            </p>
          </Col>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default TestimonialCarousel;

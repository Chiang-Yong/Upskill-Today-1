import React from "react";
import { Carousel } from "react-bootstrap";
import ImgAbout1 from "../../images/ImgAbout1.jpg";
import ImgAbout2 from "../../images/ImgAbout2.jpg";
import VisionMission from "./VisionMission";
import Testimontials from "./Testimontials";
import WhatIsUpSkilled from "./WhatIsUpSkilled";
import WhyUpskill from "./WhyUpskill";
import "./aboutUsCarousel.css";

const AboutUsCarousel = () => {
  return (
    <Carousel className="about-section">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 about-img"
          src={ImgAbout2}
          alt="First About Us Slide"
        />
        <Carousel.Caption>
          <h1 className="fw-bold fs-1 about-title">About Us</h1>
          <p className="fw-bold fs-4 about-description">
            An innovative and highly curated ​Hire, Upskill & Deploy Program
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <VisionMission />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <WhatIsUpSkilled />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <WhyUpskill />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Testimontials />
      </Carousel.Item>
    </Carousel>
  );
};

export default AboutUsCarousel;

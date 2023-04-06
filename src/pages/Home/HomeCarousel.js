import React, { useState } from "react";
import homemain from "../../images/upskill-main.jpeg";
import homebc from "../../images/home-b2c.png";
import homebb from "../../images/team-meeting.jpeg";
import "./homecarousel.css";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={homemain}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="carousel-title">PATHWAYS</h1>
          <h3 className=" carousel-text pb-4 d-none d-md-block">
            Begin The First Step Of Your IT Journey With Us
          </h3>
          <Button className="carousel-call">
            <Link
              className="text-decoration-none text-white"
              to="/CareerPathway"
            >
              Get Started
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={homebc}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className="carousel-title">About Upskill</h1>
          <h3 className=" carousel-text pb-4  d-none d-md-block">
            Get To Know More About Us
          </h3>
          <Button className="carousel-call">
            <Link className="text-decoration-none text-white" to="/About">
              About
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={homebb}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className="carousel-title">CORPORATE</h1>
          <h3 className=" carousel-text pb-4 d-none d-md-block">
            Work With Us
          </h3>
          <Button className="carousel-call">
            <Link className="text-decoration-none text-white" to="/Corporate">
              Corporate
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeCarousel;

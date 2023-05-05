import React, { useState } from "react";

import homemain from "../../../images/upskill-main.jpeg";
import homebc from "../../../images/home-b2c-1980.png";
import homebb from "../../../images/home-tgt-1980.jpeg";
import "./homecarousel.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      fade
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel-home"
    >
      <Carousel.Item className="homecarousel-item">
        <img
          className="d-block w-100 slide-img img-fluid"
          src={homemain}
          width='100%'
          height='auto'
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt="First slide"
          as='image'
          priority='true'
        />
        <Carousel.Caption className="home-caption">
          <h1 className="carousel-title">UPSKILL TODAY</h1>
          <h3 className="carousel-text pb-2 d-md-block">
            Begin Your IT Journey With Us
          </h3>
          <Button className="carousel-call">
            <Link
              className="text-decoration-none text-white"
              to="/CareerPathway"
            >
              Find Out More
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="homecarousel-item">
        <img
          className="d-block w-100 slide-img img-fluid"
          src={homebc}
          alt="Second slide"
          as='image'
          priority='true'
        />
        <Carousel.Caption className="home-caption">
          <h1 className="carousel-title">UPSKILL TODAY</h1>
          <h3 className="carousel-text pb-2 d-md-block">
            Begin Your IT Journey With Us
          </h3>
          <Button className="carousel-call">
            <Link
              className="text-decoration-none text-white"
              to="/CareerPathway"
            >
              Find Out More
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="homecarousel-item">
        <img
          className="d-block w-100 slide-img img-fluid"
          src={homebb}
          alt="Third slide"
          as='image'
          priority='true'
        />
        <Carousel.Caption className="home-caption">
          <h1 className="carousel-title">UPSKILL TODAY</h1>
          <h3 className=" carousel-text pb-2 d-md-block">
            Begin Your IT Journey With Us
          </h3>

          <Link
            className="text-decoration-none text-white"
            to="/CareerPathway "
          >
            <Button className=" carousel-call">Find Out More</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeCarousel;

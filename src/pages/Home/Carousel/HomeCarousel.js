import React, { useState } from "react";
import homemain from "../../../images/upskill-main.jpeg";
import homebc from "../../../images/home-b2c.png";
import homebb from "../../../images/home-tgt.jpeg";
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
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={homemain}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="carousel-title">UPSKILL TODAY</h1>
          <h3 className="carousel-text pb-4 d-none d-md-block">
            Begin Your IT Journey With Us
          </h3>
          <Button className="carousel-call">
            <Link
              className="text-decoration-none text-white"
              to="/CareerPathways"
            >
              Find Out More
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
          <h1 className="carousel-title">UPSKILL TODAY</h1>
          <h3 className="carousel-text pb-4  d-none d-md-block">
            Begin Your IT Journey With Us
          </h3>
          <Button className="carousel-call">
            <Link className="text-decoration-none text-white" to="/Services">
              Find Out More
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
          <h1 className="carousel-title">UPSKILL TODAY</h1>
          <h3 className=" carousel-text pb-4 d-none d-md-block">
            Begin Your IT Journey With Us
          </h3>
          <Button className=" carousel-call">
            <Link className="text-decoration-none text-white" to="/Join">
              Find Out More
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeCarousel;

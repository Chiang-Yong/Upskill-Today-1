import React from "react";
import { Card } from "react-bootstrap";
import aboutUs from "../../images/AboutUs.jpg";

import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">
        <span data-text-fill='true' 
        style={{backgroundImage:"linear-gradient(270deg, rgb(255, 123, 0) 0%, rgb(255, 208, 0) 100%)"}}
        className="colorful-text">
        Upskill Today 
        </span>
      </h1>
      <p className="about-description">
        An innovative and highly curated ​Hire, Upskill & Deploy Program.
        We believe everyone should be given a chance to enhance the Digital Information 
        skill through Upskill Today program.
      </p>

      <img src={aboutUs}></img>
    </div>
  );
};

export default AboutUs;

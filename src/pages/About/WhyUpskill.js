import React from "react";
import "./whyupskill.css";
import whyUpskill from "../../images/Why Upskill Today.png";

const WhyUpskill = () => {
  return (
    <div className="why-upskill d-inline-block">
      <img src={whyUpskill} alt="why upskill?" />
      <div className="centered">
        <h1 className="text-center" style={{ color: "#ff7b00" }}>
          Why Upskill Today?
        </h1>
        <p className="text-left">
          Whether you’re a fresh graduates or mid-career switchers looking for a
          breakthrough in your career, Upskilling not only speeds up your
          learning in programming language capabilities but also allows you to
          chart, navigate and grow your career, thus making a complete
          transformation in the shortest possible time.
        </p>
      </div>
    </div>
  );
};

export default WhyUpskill;

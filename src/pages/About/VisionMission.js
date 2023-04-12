import React from "react";
import  visionMission  from "../../images/VisionMission_50.jpg"
import "./visionMission.css"

const VisionMission = () => {
  return (
    <div className="vision-mission">
        <img src={visionMission} alt="about us 1"/>
        <div className="centered">
            <h1 className="text-center">Our Vision</h1>
            <p className="text-center"> To create a talent pool for Innovative Digital Transformation initiatives, Locally.</p>
            <h1 className="text-center" style={{marginTop:'2%',}}>Our Mission</h1>
            <p className="text-center"> Provide Aspiring candidates with a launch pad into a successful and well-paid career for Digital Transformation.</p>
        </div>
    </div>
  );
};

export default VisionMission;

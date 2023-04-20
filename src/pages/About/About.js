import React from "react";

import AboutUs from "./AboutUs";
import VisionMission from "./VisionMission";
import WhatIsUpSkill from "./WhatIsUpSkill";
import WhyUpskill from "./WhyUpskill";
// import AboutTestimontials from "./AboutTestimontials";
import BackTopButton from "../../components/BackToTopButton";

const About = () => {
  return (
    <>
      <AboutUs />

      <VisionMission />

      <WhatIsUpSkill />

      <WhyUpskill />

      {/* <AboutTestimontials /> */}

      <BackTopButton />
    </>
  );
};

export default About;

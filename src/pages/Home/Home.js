import React from "react";

import HomeCarousel from "./HomeCarousel";
import HowItWorks from "./HowItWorks";
import Statistics from "./Statistics";
import FindOutMore from "./FindOutMore";
import Companies from "./Companies";
import Testimontials from "./Testimontials";
import CompanyScroll from "./CompanyScroll.tsx";


const Home = () => {
  return (
    <>

      <HomeCarousel />

      <HowItWorks />

      <Statistics />

      <FindOutMore />

      <Companies />

      <CompanyScroll />

      <Testimontials />

    </>
  );
};

export default Home;

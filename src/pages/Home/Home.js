import React from "react";

import HomeCarousel from "./Carousel/HomeCarousel";
import HowItWorks from "./HowItWorks";
import Statistics from "./Statistics";
import FindOutMore from "./FindOutMore";
import Testimontials from "./Testimontials";
import CompaniesAutoScroll from "./CompaniesAutoScroll";

const Home = () => {
  return (
    <>
      <HomeCarousel />

      <HowItWorks />

      <Statistics />

      <FindOutMore />

      <CompaniesAutoScroll />

      <Testimontials />
    </>
  );
};

export default Home;

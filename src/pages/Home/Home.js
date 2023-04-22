import React from "react";

import HomeCarousel from "./Carousel/HomeCarousel";
import HowItWorks from "./HowItWorks";
import Statistics from "./Statistics";

import Testimontials from "./Testimontials";
import CompaniesAutoScroll from "./CompaniesAutoScroll";
import HomeDescription from "./HomeDescription";
import FindOutMore from "./FindOutMore";
import BackTopButton from "../../components/BackToTopButton";
import CompaniesMarquee from "./CompaniesMarquee";


const Home = () => {
  return (
    <>
      <HomeCarousel />

      <HomeDescription />

      <HowItWorks />

      <Statistics />

      <FindOutMore />

      <CompaniesMarquee />

      <Testimontials />

      <BackTopButton />
    </>
  );
};

export default Home;

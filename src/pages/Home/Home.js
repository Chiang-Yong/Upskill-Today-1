import React from "react";

import HomeCarousel from "./Carousel/HomeCarousel";
import HowItWorks from "./HowItWorks";
import Statistics from "./Statistics";

import Testimontials from "./Testimontials";
import HomeDescription from "./HomeDescription";
import FindOutMore from "./FindOutMore";
import BackTopButton from "../../components/BackToTopButton";
import CompaniesMarquee from "./CompaniesMarquee";
import Companies from "./Companies";



const Home = () => {
  return (
    <div className="mt-5">
      <HomeCarousel />

      <HomeDescription />

      <HowItWorks />

      <Statistics />

      <FindOutMore />

      <Companies />

      <Testimontials />

      <BackTopButton />
    </div>
  );
};

export default Home;

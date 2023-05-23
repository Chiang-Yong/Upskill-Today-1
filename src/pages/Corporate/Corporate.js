import React from "react";
//import CorporateHeader from "./CorporateHeader";
import PartnerWithUs from "./PartnerWithUs";
import Benefits from "./Benefits";
import CorporateTestimonials from "./CorporateTestimonials";
//import AccelerateLogos from "./AccelerateLogos";
import CorporateStatistics from "./CorporateStatistics";
import CollaborateWithUsForm from "./CollaborateWithUsForm";
import BackTopButton from "../../components/BackToTopButton";
import CompaniesMarquee from "../Home/CompaniesMarquee";
import AccelerateLogos from "./AccelerateLogos";

const Corporate = () => {
  return (
    <>
      {/* <CorporateHeader /> */}

      <PartnerWithUs />

      <Benefits />

      <CorporateStatistics />

      <AccelerateLogos />

      <CorporateTestimonials />

      <CollaborateWithUsForm />

      <BackTopButton />
    </>
  );
};

export default Corporate;

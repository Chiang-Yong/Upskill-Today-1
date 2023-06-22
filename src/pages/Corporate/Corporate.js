import React from "react";
//import CorporateHeader from "./CorporateHeader";
import PartnerWithUs from "./PartnerWithUs";
import Benefits from "./Benefits";
import CorporateTestimonials from "./CorporateTestimonials";
import CorporateStatistics from "./CorporateStatistics";
import CollaborateWithUsForm from "./CollaborateWithUsForm";
import BackTopButton from "../../components/BackToTopButton";
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

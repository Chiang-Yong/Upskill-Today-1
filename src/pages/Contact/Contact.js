import React from "react";
import FAQ from "./FAQ";
import GetInTouch from "./GetInTouch";
import BackTopButton from "../../components/BackToTopButton";

const Contact = () => {
  return (
    <div style={{marginTop:"5%"}}>
      <GetInTouch />
      <FAQ />
      <BackTopButton />
    </div>
  );
};

export default Contact;

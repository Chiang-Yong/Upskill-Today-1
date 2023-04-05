import React from "react";
// import Navbar from "./Components/Startbar/Startbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Corporate from "./Components/Corporate/Corporate";
import Pathways from "./Components/Pathways/Pathways";
import Footer from "./Components/Footer/Footer";

const RoutesData = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pathways" element={<Pathways />} />
          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default RoutesData;

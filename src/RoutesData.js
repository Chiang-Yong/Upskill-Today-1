import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import Contact from "./Components/Contact/Contact";
// import Corporate from "./Components/Corporate/Corporate";
// import Pathways from "./Components/Pathways/Pathways";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import CareerPathway from "./pages/CareerPathway";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import PathwayDetails from "./pages/PathwayDetails";
import JavaCourse from "./pages/JavaCourse";
import JavascriptCourse from "./pages/JavascriptCourse";
import DevOpsCourse from "./pages/DevOpsCourse";
import NavbarUST from "./components/Navbar/NavbarUST";
import Footer from "./components/Footer/Footer";

const RoutesData = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarUST />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/CareerPathway" element={<CareerPathway />} />
          <Route path="/JavaCourse" element={<JavaCourse />} />
          <Route path="/JavascriptCourse" element={<JavascriptCourse />} />
          <Route path="/DevOpsCourse" element={<DevOpsCourse />} />
          <Route path="/PathwayDetails" element={<PathwayDetails />} />

          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default RoutesData;

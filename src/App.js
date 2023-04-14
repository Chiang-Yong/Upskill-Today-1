import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CareerPathway from "./pages/CareerPathway/CareerPathway";
import Corporate from "./pages/Corporate/Corporate";
import Contact from "./pages/Contact/Contact";
import PathwayDetails from "./pages/PathwayDetails/PathwayDetails";
import JavaCourse from "./pages/PathwayDetails/JavaCourse";
import JavascriptCourse from "./pages/PathwayDetails/JavascriptCourse";
import DevOpsCourse from "./pages/PathwayDetails/DevOpsCourse";
import NavbarUST from "./components/Navbar/NavbarUST";
import Footer from "./components/Footer/Footer";

function App() {
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
}

export default App;

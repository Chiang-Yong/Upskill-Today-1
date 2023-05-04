import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CareerPathway from "./pages/CareerPathway/CareerPathway";
import Corporate from "./pages/Corporate/Corporate";
import Contact from "./pages/Contact/Contact";

import JavaCourse from "./pages/PathwayDetails/JavaCourse";
import JavascriptCourse from "./pages/PathwayDetails/JavascriptCourse";
import DevOpsCourse from "./pages/PathwayDetails/DevOpsCourse";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Dropdown from "./components/Navbar/Dropdown";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <BrowserRouter>
        <NavBar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/CareerPathway" element={<CareerPathway />} />
          <Route path="/PathwayDetails/JavaCourse" element={<JavaCourse />} />
          <Route
            path="/PathwayDetails/JavascriptCourse"
            element={<JavascriptCourse />}
          />
          <Route
            path="/PathwayDetails/DevOpsCourse"
            element={<DevOpsCourse />}
          />
         
          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarUST from "./components/NavbarUST";
import Home from "./Home";
import About from "./pages/About";
import CareerPathway from "./pages/CareerPathway";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import PathwayDetails from "./pages/PathwayDetails";
import JavaCourse from "./pages/JavaCourse";
import JavascriptCourse from "./pages/JavascriptCourse";
import DevOpsCourse from "./pages/DevOpsCourse";

function App() {
  return (
    <div className="App">
      <NavbarUST />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="career-pathway" element={<CareerPathway />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pathway-details" element={<PathwayDetails />} />
        <Route path="java-course" element={<JavaCourse />} />
        <Route path="javascript-course" element={<JavascriptCourse />} />
        <Route path="devOps-course" element={<DevOpsCourse />} />
      </Routes>
    </div>
  );
}

export default App;

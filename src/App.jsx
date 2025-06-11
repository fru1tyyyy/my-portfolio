import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Portfolio.css";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Project from "./Project.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;

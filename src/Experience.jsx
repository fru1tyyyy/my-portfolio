import React from "react";
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Experience = () => {
  return(
    <>
      <div className="container">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/project">Projects</Link></li>
          </ul>
        </nav>
      </div>
      <div className="timeline">
        <div className="timeline-item left">
          <div className="content">
            <h3>Bachelor in Software Engineering</h3>
            <strong>Apr 2025 - Apr 2027</strong>
            <p>Currently studying in Sunway University</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="content">
            <h3>BASS SDN BHD</h3>
            <strong>Aug 2024 - Dec 2024</strong>
            <p>Work as Software Intern for my Internship</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="content">
            <h3>My Pets Haven</h3>
            <strong>May 2024</strong>
            <p>Volunteer to help for Community Service</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="content">
            <h3>Diploma in Computer Science</h3>
            <strong>Apr 2023 - Apr 2025</strong>
            <p>Graduated on 2025 in Sunway College</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="content">
            <h3>IGCSE</h3>
            <strong>2018 - 2022</strong>
            <p>Finish IGCSE and graduated in DWI EMAS</p>
          </div>
        </div>
      </div>
      <footer>
        Copyright © 2025 Yu Been <br />
        Built by Yu Been •{" "}<a href="https://github.com/fru1tyyyy" target="_blank" rel="noreferrer" style={{ color: "#666" }}>GitHub</a>
      </footer>
    </>
  );
};

export default Experience;

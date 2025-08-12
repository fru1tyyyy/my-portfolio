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
            <strong>Sunway University</strong><br></br>
            <small>April 2025 - April 2027</small>
            <p>I'm currently taking Bachelor in Software Engineering and expected to graduate in April 2027. 
              During my degree, I hope to learn things I didn’t cover during my self-study or diploma. 
              So far, the assignments feel similar to diploma, so I’m not scared at all.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="content">
            <h3>Internship</h3>
            <strong>BASS SDN BHD</strong><br></br>
            <small>August 2024 - December 2024</small>
            <p>Worked as a Software Intern. During the internship, I experienced working life and gained skills like C# and JavaScript. 
                I mainly focused on backend development throughout the internship.</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="content">
            <h3>Community Service</h3>
            <strong>My Pets Havens</strong><br></br>
            <small>May 2024</small>
            <p>This was part of my diploma assignment. I volunteered at My Pets Haven by feeding dogs, cleaning cages, 
                and assisting with a dog’s injection appointment. I learned teamwork and how to better care for animals.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="content">
            <h3>Diploma in Computer Science</h3>
            <strong>Sunway College</strong><br></br>
            <small>April 2023 - April 2025</small>
            <p>Graduated with a Diploma in April 2025. During my diploma, I gained coding experience in Python, Java, PHP, and Scala. 
              I also used tools like VS Code, Google Colab, Databricks, and Qlik Sense.</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="content">
            <h3>IGCSE</h3>
            <strong>DWI EMAS</strong><br></br>
            <small>2018 - 2022</small>
            <p>I completed my IGCSE in November 2022. The subjects I took included Math, Add Math, Accounting, Biology, and Physics. 
                I was scared at first entering high school, but later I got used to it and wasn’t scared anymore.</p>
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

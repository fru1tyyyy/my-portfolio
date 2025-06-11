import React from "react";
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Projects = () => {
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
        <div className="section-title">My Skillset</div>
        <section className="skills">
          <ul className="skills-list">
            <li className="skill-card">
              <i className="fa-brands fa-python"></i>
              <strong> Python</strong><br />
              <small>Language</small>
            </li>
            <li className="skill-card">
              <i className="fa-brands fa-js"></i>
              <strong> JavaScript</strong><br />
              <small>Framework</small>
            </li>
            <li className="skill-card">
              <i className="fa-brands fa-react"></i>
              <strong> React</strong><br />
              <small>Library</small>
            </li>
            <li className="skill-card">
              <i className="fa-brands fa-java"></i>
              <strong> Java</strong><br />
              <small>Language</small>
            </li>
            <li className="skill-card">
              <strong>C#</strong><br />
              <small>Language</small>
            </li>
            <li className="skill-card">
              <i className="fa-brands fa-php"></i>
              <strong> PHP</strong><br />
              <small>Language</small>
            </li>
            <li className="skill-card">
              <i className="fa-brands fa-css3-alt"></i>
              <strong> CSS</strong><br />
              <small>CSS</small>
            </li>
            <li className="skill-card">
              <strong>Lua</strong><br />
              <small>Language</small>
            </li>
          </ul>
        </section>
        <div className="section-title">My Projects</div>
        <div className="project">
          <h2>My Portfolio</h2>
          <p>My first personal portfolio built using JavaScript, React, and CSS</p>
          <p><a href="https://github.com/fru1tyyyy/my-portfolio" target="_blank" rel="noreferrer">View Code</a></p>
        </div>
        <div className="project">
          <h2>Discord Bot (Killua)</h2>
          <p>A music bot built using Python</p>
          <p><a href="https://github.com/fru1tyyyy/Discord-Bot" target="_blank" rel="noreferrer">View Code</a></p>
        </div>
        <div className="project">
          <h2>Flappybird</h2>
          <p>Flappybird game built using JavaScript</p>
          <p><a href="https://github.com/fru1tyyyy/Flappy-Bird" target="_blank" rel="noreferrer">View Code</a></p>
        </div>
        <div className="project">
          <h2>Cinema Booking</h2>
          <p>A booking cinema website built using Java</p>
          <p><a href="#" target="_blank" rel="noreferrer">View Code</a></p>
        </div>
        <div className="project">
          <h2>Game Recommendation (Gammy)</h2>
          <p>My diploma FYP built using HTML, CSS, JavaScript and PHP</p>
          <p><a href="https://github.com/fru1tyyyy/Gammy" target="_blank" rel="noreferrer">View Code</a></p>
        </div>
      </div>
      <footer>
        Copyright © 2025 Yu Been <br />
        Built by Yu Been •{" "}<a href="https://github.com/fru1tyyyy" target="_blank" rel="noreferrer" style={{ color: "#666" }}>GitHub</a>
      </footer>
    </>
  );
};

export default Projects;

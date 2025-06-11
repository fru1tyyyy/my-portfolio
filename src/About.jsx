import React from "react";
import { Link } from 'react-router-dom';
import "./Portfolio.css";
import pfp from "./img/husky.jpg";

<title>About Me</title>
export default function About(){
  return(
    <div className="container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/project">Projects</Link></li>
        </ul>
      </nav>
      <header className="header">
        <img src={pfp} alt="pfp" className="pfp"/>
        <div className="intro">
          <h1>Yu Been</h1>
          <p>Aspiring Game Developer</p>
        </div>
      </header>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="https://www.linkedin.com/in/been-yu-804389306/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          <li><a href="https://github.com/fru1tyyyy" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a></li>
          <li><a href="https://www.instagram.com/yubeen721/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </nav>
      <div className="section-title">About Me</div>
      <div className="project">
        <h2>~ My Location</h2>
        <p>Malaysia</p>
        <h2>~ My Hobby</h2>
        <p>Gaming, Coding, Tech Stuff, Cubing</p>
        <h2>~ My Education</h2>
        <p>Bachelor Software Engineering - Sunway University</p>
        <h2>~ My Contact Info</h2>
        <p><a href="mailto:gammy358@gmail.com" target="_blank" rel="noreferrer">Email me</a>, <a href="https://www.linkedin.com/in/been-yu-804389306/" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://github.com/fru1tyyyy" target="_blank" rel="noreferrer">GitHub</a></p>
        <h2>~ My Resume</h2>
        <p><a href="#" target="_blank" rel="noreferrer">Been Resume</a></p>
        <h2>~ My Skills</h2>
        <p>Web Development, Game Development, Computer Hardware</p>
        <h2>~ My Languages</h2>
        <p>English, Chinese, Malay</p>
      </div>
      <footer>
        Copyright © 2025 Yu Been <br />
        Built by Yu Been •{" "}<a href="https://github.com/fru1tyyyy" target="_blank" rel="noreferrer" style={{ color: "#666"}}>GitHub</a>
      </footer>
    </div>
  )
}

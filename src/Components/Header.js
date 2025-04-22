import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Assets/github.png";
import "../Assets/linkedin.png";

function Header() {
    return (
        <header className="top-header">
            

              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' , display: 'flex', flexDirection: 'row'}}>
                <span className="bold">Edward </span>Zilbert
              </Link>

              
              <nav className="navwrap">
               
                <Link to="/skills" className="nav_link">Skills</Link>
                <Link to="/projects" className="nav_link">Projects</Link>
                <Link to="/contact" className="nav_link">Contact</Link>
                        
              </nav>
              <div className="socials">
                <a href="https://www.linkedin.com/in/edward-zilbert-251040216/" target="_blank" rel="noopener noreferrer">
                  <img src={require("../Assets/linkedin.png")} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/Edd4952" target="_blank" rel="noopener noreferrer">
                  <img src={require("../Assets/github.png")} alt="Github" className="social-icon" />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <img src={require("../Assets/resumeicon.png")} alt="Resume" className="social-icon" />
                </a>
              </div>

              
            
            
        </header>
    );
}

export default Header;
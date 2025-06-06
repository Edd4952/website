import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/1_Header.css";

function Intro(){
    //"for the scroll listener"
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
            setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
        
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            {/*second header*/}
            <header className={`top-header`} style={{zIndex : "5"}}>        
                <nav className="navwrap">
                    <button className="nav_link" onClick={() => scrollToSection("3_Skills")}>Skills</button>
                    <button className="nav_link" onClick={() => scrollToSection("4_Projects")}>Projects</button>
                    <button className="nav_link" onClick={() => scrollToSection("5_Contact")}>Contact</button>
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
            {/* Intro Section */}
            <header className="App-header">
                <h1> Edward Z</h1>
                <h1 style={{fontSize: "38px"}}> Software guy and future gazillionaire</h1>
                <a href="https://github.com/Edd4952" target="_blank" rel="noopener noreferrer">
                    My Github
                </a>
            </header>
        </div>
    );
}

export default Intro;
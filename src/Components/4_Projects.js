import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/4_Projects.css";

function Projects() {
    return (
        <div>
            <h1 style={{ padding: "20px" , paddingLeft: "20px", borderTop: "2px solid #ccc" }}>My Projects</h1>
            <div className="projects-container">
                <div className="project-box">
                    <h3>Project Title</h3>
                    <p>Project description goes here.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
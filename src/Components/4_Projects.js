import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/4_Projects.css";

function Projects() {
    const projects = [
        { id: 1, title: "Project One", description: "Description of project one." , tools: ["React", "Node.js", "CSS"] },
        { id: 2, title: "Project Two", description: "Description of project two." },
        { id: 3, title: "Project Three", description: "Description of project three." },
    ];
    return (
        <div>
            <section id="4_Projects"></section>
            <h1 style={{ paddingLeft: "20px", paddingTop: "90px" }}>My Projects</h1>
            <div className="projects-container">{
                    projects.map(project => (
                    <div key={project.id} className="project-box">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
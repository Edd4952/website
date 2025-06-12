import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/4_Projects.css";
import spacepreview from "../Assets/spaceshipgame-preview.png"; 

function Projects() {
    const projects = [
        { id: 1, title: "Gamemaker Project: Spaceship Game", description: "A 2d game made from scratch with complete movement, collision detection, enemy AI, and basic game logic.", tools: ["Gamemaker Studio", "GML code", "Sprite Maker"], image: spacepreview },
        { id: 2, title: "Project Two", description: "Description of project two.", tools: ["JavaScript", "HTML", "CSS"], image: spacepreview },
        { id: 3, title: "Project Three", description: "Description of project three.", tools: ["Python", "Django"], image: spacepreview },
    ];
    
    return (
        <div>
            <section id="4_Projects"></section>
            <h1 style={{ paddingLeft: "20px", paddingTop: "90px" }}>My Projects</h1>
            <div className="projects-container">{
                projects.map(project => (
                    <div key={project.id} className="project-box">
                        <div className="project-overview">
                            {/* All the info for the project */}
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tool-container">
                                {project.tools.map(tool => (
                                    <div className="tool">{tool}</div>
                                ))}
                            </div>
                        </div>
                        {/* Project preview, e.g., an image or video */}
                        <div className="project-preview">
                            <img src={project.image} alt="" height="200em" width="auto" style={{ verticalAlign: "middle" }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
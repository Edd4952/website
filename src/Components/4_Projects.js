import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/4_Projects.css";
import spacepreview from "../Assets/spaceshipgame-preview.png"; 
import portalpreview from "../Assets/portalvidthumbnail.png";

function Projects() {

    const portaldesc = "I made this video in about four weeks for an AP physics project. I worked on it almost every day until it was finished, and even then I went back, revised, and improved the content about seven times, making this the eighth and final iteration. It was presented to my class on June 2nd, 2023.";
    const projects = [
        { id: 1, title: "Science Project: Video based on the Portal games", description: portaldesc, link: <Link to="https://drive.google.com/file/d/1x0MXnmTKzz1VX35BpCfX2drqyYO5CX6v/view?usp=drive_link">Watch my video</Link>, tools: ["Adobe Premier Pro", "Photoshop", "After Effects", "Elevenlabs", "Audacity"], image: portalpreview },
        { id: 2, title: "Gamemaker Project: Spaceship Game", description: "A 2d game made from scratch with complete movement, collision detection, enemy AI, and basic game logic.", link: <Link to="https://gx.games/games/hmg0tx/2001-spaceship/tracks/193361a8-bcc2-4e89-b95d-40e97a322f8b/">Check it out on GX.games</Link>, tools: ["Gamemaker Studio", "GML code", "Sprite Maker"], image: spacepreview },
        { id: 3, title: "Project Three", description: "Description of project three.", link: <Link to="/projects/3">View Project</Link>, tools: ["Python", "Django"], image: spacepreview },
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
                            {project.link}
                            <div className="tool-container">
                                {project.tools.map(tool => (
                                    <div className="tool">{tool}</div>
                                ))}
                            </div>
                        </div>
                        {/* Project preview, an image or video */}
                        <div className="project-preview">
                            <img src={project.image} alt="" height="200em" width="auto" style={{ verticalAlign: "middle", marginRight: "1vw" }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
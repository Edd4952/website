import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/3_Skills.css"; // Import your CSS file for styling
//images
import cpp from "../Assets/c-logo-a2fa.png";
import python from "../Assets/python-1d15.png";
import js from "../Assets/javascript.jpg";
import java from "../Assets/java-logo-trasparent-bf11.png";
import css from "../Assets/css.png";


function Skills() {
    const [expanded, setExpanded] = useState([]);
    const box1 = "JavaScript is a versatile programming language used for web development, server-side scripting, and more.";
    const box2 = "React is a JavaScript library for building user interfaces.";
    const box3 = "CSS is used to style and layout web pages.";

    const skills = [
        { id: 1, title: "JavaScript", description: box1, image: js },
        { id: 2, title: "React", description: box2, image: python },
        { id: 3, title: "CSS", description: box3, image: css },
    ];

    const toggleExpand = (id) => {
        setExpanded(prev =>
            prev.includes(id)
                ? prev.filter(expandedId => expandedId !== id)
                : [...prev, id]
        );
    };

    return (
        <div>
            <section id="3_Skills"></section>
            <h1 style={{ paddingLeft: "20px", paddingTop: "90px" }}>My Skills</h1>
            <div className="skills-container">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-box">
                        <div className="skill-header" onMouseEnter={() => toggleExpand(skill.id)}>
                            <h3>{skill.title}</h3>
                        </div>
                        {expanded.includes(skill.id) && (
                            <div className="skill-content">
                                <img src={skill.image} alt="Description" height={"20em"} width={"auto"} vertical-align={"middle"}/>
                                <p>{skill.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
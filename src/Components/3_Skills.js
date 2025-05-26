import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";
import "../Styles/3_Skills.css"; // Import your CSS file for styling

function Skills() {
    const [expanded, setExpanded] = useState(null);
    const box1 = "JavaScript is a versatile programming language used for web development, server-side scripting, and more.";
    const box2 = "React is a JavaScript library for building user interfaces.";
    const box3 = "CSS is used to style and layout web pages.";

    const skills = [
        { id: 1, title: "JavaScript", description: box1 },
        { id: 2, title: "React", description: box2 },
        { id: 3, title: "CSS", description: box3 },
    ];

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div>
            <h1>My Skills:</h1>
            <div className="skills-container">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-box">
                        <div className="skill-header" onClick={() => toggleExpand(skill.id)}>
                            <h3>{skill.title}</h3>
                        </div>
                        {expanded === skill.id && (
                            <div className="skill-content">
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
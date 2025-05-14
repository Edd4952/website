import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";

function Skills() {
    const [expanded, setExpanded] = useState(null);

    const skills = [
        { id: 1, title: "JavaScript", description: "JavaScript is a versatile programming language used for web development, server-side scripting, and more." },
        { id: 2, title: "React", description: "React is a JavaScript library for building user interfaces." },
        { id: 3, title: "CSS", description: "CSS is used to style and layout web pages." },
    ];

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="Skills-container">
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
    );
}

export default Skills;
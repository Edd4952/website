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
import react from "../Assets/react.png";
import vsCode from "../Assets/vscode.png";
import intelliJ from "../Assets/intellij.png";
import unity from "../Assets/unity.png";
import gameMaker from "../Assets/gamemaker.png";



function Skills() {
    const [setExpanded] = useState([]);
    const javasdesc = "JavaScript is a versatile programming language used for web development, server-side scripting, and more.";
    const reactdesc = "React is a JavaScript library for building user interfaces.";
    const cssdesc = "CSS is used to style and layout web pages.";
    const cppdesc = "C++ is a powerful general-purpose programming language that supports object-oriented programming.";

    const languages = [
        { id: 1, title: "Javascript", description: javasdesc, image: js },
        { id: 2, title: "React", description: reactdesc, image: react },
        { id: 3, title: "CSS", description: cssdesc, image: css },
        { id: 4, title: "C++", description: cppdesc, image: cpp },
        { id: 5, title: "Python", description: "Python is a high-level, interpreted programming language known for its readability.", image: python },
        { id: 6, title: "Java", description: "Java is a widely-used object-oriented programming language.", image: java },
        { id: 7, title: "GML", description: "", image: gameMaker },
    ];
    const compsciSkills = [
        { id: 1, title: "VSCode", description: "", image: vsCode },
        { id: 2, title: "IntelliJ Idea", description: javasdesc, image: intelliJ },
        { id: 3, title: "Unity", description: javasdesc, image: unity },
        { id: 4, title: "GameMaker Studio", description: javasdesc, image: gameMaker },
    ];
    const softSkills = [
        { id: 1, title: "Communication", description: "Effective communication skills are essential for collaboration and teamwork." },
        { id: 2, title: "Problem Solving", description: "The ability to analyze problems and find effective solutions." },
        { id: 3, title: "Time Management", description: "Managing time efficiently to meet deadlines and priorities." },
    ];

    /*const toggleExpand = (id) => {
        setExpanded(prev =>
            prev.includes(id)
                ? prev.filter(expandedId => expandedId !== id)
                : [...prev, id]
        );
    };*/

    return (
        <div>
            <section id="3_Skills"></section>
            <h1 style={{ paddingLeft: "20px", paddingTop: "90px" }}>My Skills</h1>

            {/* begin skill cards */}
            
            <div className="skilltype-container">
                {/* prog languages */}
                <div className="skills-container">
                    {/*title for skill card*/}
                    <h3 style={{ color: "#85929e ", margin: "0"}}>Programming Languages: </h3>
                    {/*break into next line*/}
                    <div style={{ flexBasis: "100%", height: "0"}}></div>
                    
                    {languages.map((language) => (
                        <div key={language.id} className="skill-box">
                            <div className="skill-header">
                                <h3>{language.title}</h3>
                                <img src={language.image} alt="" height="20em" width="auto" style={{ verticalAlign: "middle" }} />
                                <div className="skill-tooltip" style={{left: "0%", transform: "translateX(0%)"}}>
                                    <p>{language.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}                    
                </div>
                {/* computer skills */}
                <div className="skills-container">
                    {/*title for skill card*/}
                    <h3 style={{ color: "#85929e ", margin: "0"}}>Computer Science Skills: </h3>
                    {/*break into next line*/}
                    <div style={{ flexBasis: "100%", height: "0" }}></div>
                    {compsciSkills.map((skill) => (
                        <div key={skill.id} className="skill-box">
                            <div className="skill-header">
                                <h3>{skill.title}</h3>
                                <img src={skill.image} alt="" height="20em" width="auto" style={{ verticalAlign: "middle" }} />
                                <div className="skill-tooltip" style={{left: "50%", transform: "translateX(-50%)"}}>
                                    <p>{skill.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* soft skills */}
                <div className="skills-container">
                    {/*title for skill card*/}
                    <h3 style={{ color: "#85929e ", margin: "0"}}>Soft Skills: </h3>
                    {/*break into next line*/}
                    <div style={{ flexBasis: "100%", height: "0" }}></div>

                    {softSkills.map((skill) => (
                        <div key={skill.id} className="skill-box">
                            <div className="skill-header">
                                <h3>{skill.title}</h3>
                                <img src={skill.image} alt="" height="20em" width="auto" style={{ verticalAlign: "middle" }} />
                                <div className="skill-tooltip" style={{left: "100%", transform: "translateX(-100%)"}}>
                                    <p>{skill.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default Skills;
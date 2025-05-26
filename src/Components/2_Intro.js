import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/App.css";

function Intro(){
    return (
        
        <header className="App-header">
            <h1> Edward Z</h1>
            <h1 style={{fontSize: "38px"}}> Software guy and future gazillionaire</h1>
            <a href="https://github.com/Edd4952" target="_blank" rel="noopener noreferrer">
                My Github
            </a>
        </header>
        
    );
}

export default Intro;
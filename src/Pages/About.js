import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'

function About(){
  return (
    <div>
      <header className="App-header">
        <p>Welcome to the About Page!</p>
        <Link to="/movies">Movies</Link>
      </header>
    </div>
  );
};

export default About;
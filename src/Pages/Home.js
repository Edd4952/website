import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'
import Header from "../Components/Header.js";

function Home(){
  return (
    <div>
      
      <Header/>



      <header className="App-header">
        <h1> Hi, I'm </h1>
        <h2> Edward Z</h2>
        <Link to="/movies">Resume</Link>
        <a href="https://github.com/Edd4952" target="_blank" rel="noopener noreferrer">
        Visit My Github
        </a>
      </header>
    </div>
  );
};

export default Home;
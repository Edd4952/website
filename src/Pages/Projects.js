import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'
import Header from "../Components/Header.js";

function Movies(){
  return (
    <div>
      <Header/>

      
      <header className="App-header">
        <p>choose the movie to watch:</p>
        
      </header>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Movies;
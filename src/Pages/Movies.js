import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'
import fightclub from '../fightclub.jpg';
import fightclubmovie from './fightclubmovie';

function Movies(){
  return (
    <div>
      <header className="top-header">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Edward<span className="antibold">Zilbert</span></h1>
        </Link>
      </header>

      
      <header className="App-header">
        <p>choose the movie to watch:</p>
        <Link to="/fightclubmovie">
          <img src={fightclub} alt="Description of the image"/>
        </Link>
      </header>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Movies;
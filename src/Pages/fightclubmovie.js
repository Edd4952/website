import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';


function fightclubmovie(){
  return (
    <div>
      <header className="top-header">
        <h1>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Edward<span className="antibold">Zilbert</span></h1>
          </Link>
        </h1>
      </header>
    </div>
  );
};

export default fightclubmovie;

//this is the header file
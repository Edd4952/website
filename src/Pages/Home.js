import React from "react";
import '../App.css';
import { Link } from 'react-router-dom'
import Header from "../Components/1_Header.js";
import Intro from "../Components/2_Intro.js";
import Skills from "../Components/3_Skills.js";
import Projects from "../Components/4_Projects.js";
import Contact from "../Components/5_Contact.js";

function Home(){
  return (
    <div>
      <Header/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Home;
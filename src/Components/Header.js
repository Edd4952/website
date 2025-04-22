import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
    return (
        <header className="top-header">
            

              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="bold">Edward </span>Zilbert
              </Link>

              
              <nav className="navwrap">
               
                <Link to="/skills" className="nav_link">Skills</Link>
                <Link to="/projects" className="nav_link">Projects</Link>
                <Link to="/contact" className="nav_link">Contact</Link>
                        
              </nav>

              
            
            
        </header>
    );
}

export default Header;
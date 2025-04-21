import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
    return (
        <header className="top-header">
            <h1>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>Edward<span className="antibold">Zilbert</span></h1>
              </Link>
            </h1>
            
        </header>
    );
}

export default Header;
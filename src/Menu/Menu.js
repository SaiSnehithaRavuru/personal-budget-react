import React from 'react';
import {
  Link
} from "react-router-dom";
function Menu() {
  return (
    <nav
    >
        <ul>
            <li><Link to="/" aria-label="Homepage">Homepage</Link></li> 
            <li><Link to="/about" aria-label="About Page">About</Link></li> 
            <li><Link to="/login" aria-label="Login Page">Login</Link></li> 
        </ul>
    </nav>
  );
}

export default Menu;

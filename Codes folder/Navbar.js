import React, { Component } from 'react';
import './navbar.css'; // import the CSS file for styling

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#learning-content">Learning Content</a></li>
          <li><a href="#notes">Notes</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#sign-in">Sign In/Sign Up</a></li>
        </ul>
        

      </div>
      
    );  
      
    
  }
}

export default NavBar;

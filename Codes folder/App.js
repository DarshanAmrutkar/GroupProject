import logo from './logo.svg';
import './navbar.css';
import React, { Component } from 'react';
import NavBar from './Navbar.js';
import './Box.js';
import './App.css'; // import the CSS file for styling
import './heading.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="heading-container">
          <h1 className="heading">Trending Articles</h1>
        </div>
      </div>
    );
  }
}

export default App;

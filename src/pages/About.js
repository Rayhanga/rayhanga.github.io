import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';

class About extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">About</h1>
            <p>My name is Rayhan Gusty Alif, Indonesian, Senior High School student, and a learning developer.</p>
            <p>You can see some of my open source projects at <a href="https://github.com/Rayhanga/" target="_blank">Github</a>.</p>
            <p>Or follow me on <a href="https://twitter.com/rayhanga" target="_blank">Twitter</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About

import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';

class About extends Component {
  componentDidMount() {
    document.title="About";
  }
  render() {
    return(
      <div>
        <Navbar />
      </div>
    );
  }
}

export default About

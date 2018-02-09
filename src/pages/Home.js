import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';

class Home extends Component {

  render() {
    return(
      <div>
        <Navbar />
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Home</h1>
            <p>Welcome to my personal website that hosted on <a href="https://pages.github.com/" target="_blank">Github Pages.</a></p>
            <p>You can see, fork, or even clone the source code into your local machine at <a href="https://github.com/Rayhanga/rayhanga.github.io" target="_blank">Github</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home

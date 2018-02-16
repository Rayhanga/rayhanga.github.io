import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import picture from '../images/bg.png';

class Content extends Component {
  render() {
    return(
      <div>
        <AboutMe />
      </div>
    );
  }
}

class AboutMe extends Component {
  render() {
    return(
      <div className="container">
        <h1 className="text-center">Little About Me</h1>
        <br />
        <div className="row">
          <div className="col-3">
            <img src={picture} className="img-fluid rounded" title="Blue Ocean" alt="Blue Ocean"/>
          </div>
          <div className="col">
            <p>Hello, my name is Rayhan Gusty Alif, I'm a Senior High School student that came from Indonesia</p>
            <p>I'm still learning how to develop and program a software, website, or even game.</p>
            <p className="text-right">
              <Link to="/about">More Info</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class WCID extends Component {
  render() {
    return(
      <div className="container">

      </div>
    );
  }
}

export default Content

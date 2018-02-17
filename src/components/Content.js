import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import picture from '../images/bg.png';

class Content extends Component {
  render() {
    return(
      <div>
        <AboutMe />
        <hr />
        <WCID />
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
            <p>Hello, my name is Rayhan Gusty Alif, I'm a Senior High School student <i>(for now)</i> that came from Indonesia.</p>
            <p>I have passion for music, technology, and game.</p>
            <p>I'm also still learning how to develop a software or even to compose music.</p>
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
        <h1 className="text-center">What Can I Do?</h1>
        <br />
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Java Programming</h4>
                <span className="text-muted"><i>2015-2017</i></span>
                <p className="card-text">I have an experience of Java programming for about 2 years. I will mostly understand some advanced topic for Java programming language.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Website Developing</h4>
                <span className="text-muted"><i>2016-now</i></span>
                <p className="card-text">I have an experience of Website developing for about 3 years. This website is one of my project that involves with website developing.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Java Programming</h4>
                <span className="text-muted"><i>2015-2017</i></span>
                <p className="card-text">I have an experience of Java programming for about 2 years. I will mostly understand some advanced topic for Java programming language.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Java Programming</h4>
                <span className="text-muted"><i>2015-2017</i></span>
                <p className="card-text">I have an experience of Java programming for about 2 years. I will mostly understand some advanced topic for Java programming language.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content

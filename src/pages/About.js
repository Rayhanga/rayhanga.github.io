import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Error from './Error.js'

class About extends Component {
  componentDidMount() {
    document.title="About";
  }
  render() {
    return(
      <div>
        <Header />
        <div className="container contents">
          <Error />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About

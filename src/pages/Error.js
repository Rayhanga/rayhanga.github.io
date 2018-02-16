import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import picture from '../images/bg.png';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';

class Error extends Component{
  render() {
    return(
      <div className='row'>
        <div className='col'>
          <h1 className='text-center font-weight-bold bg-warning'>
            Under Development
          </h1>
          <p className="text-center">
            <Link to="/">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default Error;

import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import MediaQuery from 'react-responsive';

class Error extends Component{
  render() {
    return(
      <div className='row'>
        <div className='col'>
          <h1 className='text-center font-weight-bold bg-warning'>
            Under Development
          </h1>
        </div>
      </div>
    );
  }
}
export default Error;

import React, { Component } from 'react';

class Header extends Component{
  render() {
    return(
      <div className='jumbotron text-center bg-dark'>
        <div className='container'>
          <h1 className='display-4 font-weight-bold'>Rayhan Gusty Alif</h1>
          <br / >
          <div className='row'>
            <div className='col-3' />
            <div className='col-2'>
              <a href='https://twitter.com/rayhanga' target='_blank'>
                <i className='fa fa-twitter fa-3x' alt='Twitter' title='Twitter'/>
              </a>
            </div>
            <div className='col-2'>
              <a href='https://www.facebook.com/rayhan.gustyalif' target='_blank'>
                <i className='fa fa-facebook fa-3x' alt='Facebook' title='Facebook'/>
              </a>
            </div>
            <div className='col-2'>
              <a href='https://github.com/rayhanga' target='_blank'>
                <i className=' 	fa fa-github fa-3x' alt='Github' title='Github'/>
              </a>
            </div>
            <div className='col-3' />
          </div>
        </div>
      </div>
    );
  }
}
export default Header

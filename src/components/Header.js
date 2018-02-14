import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Header.css'

class Header extends Component {
   //Desktop: min-width: 1224px
  //Mobile: max-width: 1224px
  render() {
    return(
      <div className='page-header text-center bg-dark'>
        <MediaQuery query="(min-width: 1224px)">
          <Content />
        </MediaQuery>
        <MediaQuery query="(max-width: 1224px)">
          <ContentMin />
        </MediaQuery>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <div className='container'>
        <h1 className='display-4 font-weight-bold'>Rayhan Gusty Alif</h1>
        <br / >
        <div className='row'>
          <div className='col'>
            <a href='https://twitter.com/rayhanga' target='_blank'>
              <i className='fa fa-twitter fa-3x' alt='Twitter' title='Twitter'/>
            </a>
          </div>
          <div className='col'>
            <a href='https://www.facebook.com/rayhan.gustyalif' target='_blank'>
              <i className='fa fa-facebook fa-3x' alt='Facebook' title='Facebook'/>
            </a>
          </div>
          <div className='col'>
            <a href='https://github.com/rayhanga' target='_blank'>
              <i className='fa fa-github fa-3x' alt='Github' title='Github'/>
            </a>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

class ContentMin extends Component {
  render() {
    return(
      <div className='container'>
        <h2 className=' font-weight-bold'>Rayhan Gusty Alif</h2>
        <br / >
        <div className='row'>
          <div className='col'>
            <a href='https://twitter.com/rayhanga' target='_blank'>
              <i className='fa fa-twitter fa-2x' alt='Twitter' title='Twitter'/>
            </a>
          </div>
          <div className='col'>
            <a href='https://www.facebook.com/rayhan.gustyalif' target='_blank'>
              <i className='fa fa-facebook fa-2x' alt='Facebook' title='Facebook'/>
            </a>
          </div>
          <div className='col'>
            <a href='https://github.com/rayhanga' target='_blank'>
              <i className='fa fa-github fa-2x' alt='Github' title='Github'/>
            </a>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Header;

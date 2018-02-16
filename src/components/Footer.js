import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Footer.css'

class Footer extends Component {
   //Desktop: min-width: 1224px
  //Mobile: max-width: 1224px
  render() {
    return(
      <div className='page-footer center-on-small-only bg-dark'>
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
      <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <p className='text-left'>
              Hosted with: <a href='https://pages.github.com/' target='_blank'>Github Pages</a>
            </p>
          </div>
          <div className='col'>
            <div className='footer-copyright'>
              <div className='container-fluid text-center'>
                Created by me © 2018
              </div>
            </div>
          </div>
          <div className='col'>
            <p className='text-right'>
              <a href='https://github.com/rayhanga/rayhanga.github.io/tree/develop' target='_blank'>Source Code</a>
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

class ContentMin extends Component {
  render() {
    return(
      <div className='footer-copyright'>
        <div className='row'>
          <div className='col'>
            <p className='text-left small'>
              Hosted with: <a href='https://pages.github.com/' target='_blank'>Github Pages</a>
            </p>
          </div>
          <div className='text-center col small'>
            Created by me © 2018
          </div>
          <div className='col'>
            <p className='text-right small'>
              <a href='https://github.com/rayhanga/rayhanga.github.io/tree/develop' target='_blank'>Source Code</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer

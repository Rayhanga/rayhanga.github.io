import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <div className='page-footer center-on-small-only bg-dark'>
        <div className='container'>
          <div className='col-md'>
          Hosted with <a href='https://pages.github.com/' target='_blank'>Github Pages.</a>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container-fluid text-center'>
            Created by me © 2018
          </div>
        </div>
      </div>
    );
  }
}

export default Footer

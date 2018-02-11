import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js'
import './Home.css';

class Home extends Component {
  componentDidMount() {
    document.title='Rayhan Gusty Alif';
  }

  render() {
    return(
      <div>
        <Header />
        <div className='container'>
          <div className='text-center'>
            <h1 className='display-1'>Under Development</h1>
            <h2 className='display-3'>May update weekly</h2>
            <h2 className='display-5'>Stay tuned for updates :v</h2>
          </div>
        </div>
        <footer className='footer'>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Home

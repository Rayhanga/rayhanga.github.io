import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import MediaQuery from 'react-responsive';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    document.title='Rayhan Gusty Alif';
  }

  render() {
    return(
      <div>
        <div>
          <Header />
          <div className='container'>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;

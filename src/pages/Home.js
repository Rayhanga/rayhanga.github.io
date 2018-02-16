import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import Content from '../components/Content.js'
import './Home.css';

class Home extends Component {
  componentDidMount() {
    document.title='Rayhan Gusty Alif';
  }

  render() {
    return(
      <div>
        <Header />
        <div className="container contents">
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;

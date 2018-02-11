import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../pages/Home.js";
import About from "../pages/About.js"
import './App.css'
//import Item from "./Item.js";
//import {initialItems} from '../items.js';

class App extends Component {

  /*constructor() {
    super();

    this.state = {
      //items: initialItems,
      title: "Rayhan Gusty Alif"
    };
  }*/

  //Execute when component loaded
  /*componentDidMount() {
    //Change the title into this.state.title
    document.title = this.state.title;
  }*/

  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;

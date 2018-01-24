import React, { Component } from 'react';
import '../App.css';
import Header from "./Header.js";
import Item from "./Item.js";
import {initialItems} from '../items.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      items: initialItems,
      title: "Rayhan Gusty Alif"
    };
  }

  render() {

    return(
      <div className="App">
        <Header text={ this.state.title } className="Header" />
        <div className="Items">
          {
            Object
            /*
            This will make the item list from the json file.
            It'll loop to make an object for each "Key" based from the json.
            */
              .keys(this.state.items) //Get "Key" from the items state.
              .map(key => <Item key={key} meta={this.state.items[key]} />) // The loop.
          }
        </div>
      </div>
    );
  }
}

export default App;

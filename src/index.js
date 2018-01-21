import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Index extends React.Component {
  componentDidMount(){
    document.title ="Rayhan Gusty Alif";
  }
  render() {
    return (
      <div>
      <h1>Rayhan Gusty Alif</h1>
      <p>A simple website made with react.js</p>
      </div>
    );
  };
};

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

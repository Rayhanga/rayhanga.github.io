import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return(
      <nav className="navbar fixed-top navbar-light bg-light">
        <Link className="navbar-brand" to="/">Fixed top</Link>
      </nav>
    );
  }
}

export default Navbar

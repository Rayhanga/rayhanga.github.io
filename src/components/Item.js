import React, { Component } from 'react';

class Item extends Component {

  render() {

    return(
      <div className="item">
        <h2>{ this.props.meta.title }</h2>
        <img src={ this.props.meta.img_source } alt={ this.props.meta.img_alt }/>
        <p>{ this.props.meta.description }</p>
        <a href={ this.props.meta.link }>{ this.props.meta.link_description }</a>
      </div>
    );
  }
}

export default Item;

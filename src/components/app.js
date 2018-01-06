import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../containers/search_bar';

export default class App extends Component {

  render(){
    return (
      <div className="container col-md-12">
        <SearchBar/>
        {this.props.children}
      </div>
    )
  }
}
App.propTypes = {
  children: PropTypes.node
}

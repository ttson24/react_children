import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

constructor(props){
	super(props);
	this.state = {
    term:'osaka'
  };
  this.onSearchSubmit = this.onSearchSubmit.bind(this);
  this.onInputChange = this.onInputChange.bind(this);
}
onInputChange(event){
  this.setState({term: event.target.value})
}
onSearchSubmit(event){
  event.preventDefault();

  this.setState({term:''})
}
  render(){
    return (
      <form onSubmit={this.onSearchSubmit} className="input-group" style={{margin:'2%'}}>
            <input type="text"
              className="form-control"
              placeholder="search for city..."
              value={this.state.term}
              onChange={this.onInputChange}/>
            <span className="input-group-addon" style={{margin:'0px', padding:'0px'}}>
              <input  type="submit" className="btn btn-secondary"
                style={{height: '25px', padding: '2px 10px 2px 10px', border:'10px'}}/>
            </span>

      </form>
    );
  }
}

export default connect()(SearchBar);

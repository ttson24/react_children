import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempeature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}

export default connect()(WeatherList);

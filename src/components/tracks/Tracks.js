import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
        }}
      </Consumer>
    );
  }
}

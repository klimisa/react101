"use strict";

var React = require('react');

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses the following technologies</p>          
          <ul>
            <li>React</li>
            <li>Flux</li>
          </ul>
      </div>
    )
  }
}

module.exports = About;
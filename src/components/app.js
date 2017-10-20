"use strict";

var React = require('react');
var Header = require('./common/header');
var Routes = require('../routes');

class App extends React.Component {
    render() {
      return (
          <div>
            <Header />
            <div className="container-fluid">
                <Routes />
            </div>
          </div>
      )
    }
}

module.exports = App;
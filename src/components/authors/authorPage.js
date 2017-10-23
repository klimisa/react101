"use strict";

var React = require('react');

var AuthorStore = require('../../stores/authorStore');

var AuthorList = require('./authorList');

var ReactRouterDOM = require('react-router-dom');
var Link = ReactRouterDOM.Link;

class Authors extends React.Component {
    constructor (props) {
        super(props)
        this.state = {authors: AuthorStore.getAllAuthors()};
    }
    render() {
      return (
        <div>
            <h1>Authors</h1>
            <Link to="/authors/add" className="btn btn-default">Add Author</Link>
            <AuthorList authors={this.state.authors} />
        </div>
      )
    }
  }
  
  module.exports = Authors;
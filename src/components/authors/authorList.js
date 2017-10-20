"use strict";

var React = require('react');

var ReactRouterDOM = require('react-router-dom');
var Link = ReactRouterDOM.Link;

class AuthorList extends React.Component {
    render() {
        const createAuthorRow = (author) => {
            return (
                <tr key={author.id}>
                    <td><Link to={`authors/${author.id}`}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            )
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        )
    }
  }
  
  module.exports = AuthorList;
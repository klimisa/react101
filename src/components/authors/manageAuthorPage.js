"use strict";

var React = require('react');
var ReactRouterDOM = require('react-router-dom');
var Redirect = ReactRouterDOM.Redirect;
var Prompt = ReactRouterDOM.Prompt;

var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');

var toastr = require('toastr');

class ManageAuthorPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            author: {id:'', firstName:'', lastName:''}, 
            redirectToReferrer: false,
            errors: {},
            isBlocking: false
        };
    }
    setAuthodState(event) {
        this.setState({isBlocking: true});
        const field = event.target.name;
        const value = event.target.value;
        this.state.author[field] = value;
        this.setState({author: this.state.author})
    }
    authorFormIsValid() {
        var formIsValid = true;
        this.state.errors = {}

        if(this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters'
            formIsValid = false
        }

        if(this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters'
            formIsValid = false
        }

        this.setState({errors: this.state.errors})
        return formIsValid;
    }
    saveAuthor(event) {
        event.preventDefault();

        if(!this.authorFormIsValid()) {
            return;
        }

        AuthorActions.createAuthor(this.state.author);

        this.setState({isBlocking: false});
        toastr.success("Author saved.");
        this.setState({redirectToReferrer: true})
    }
    componentDidMount() {
        var authorId = this.props.match.params.authorId;
        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/authors' } }
        const { redirectToReferrer, isBlocking } = this.state

        if (redirectToReferrer) {
            return (
              <Redirect to={from}/>
            )
        }

        return (
            <div>
                <h1>Manage Author</h1>
                <Prompt when={isBlocking} message={location => (`Leave without saving?`)}/>
                <AuthorForm 
                    author={this.state.author} 
                    onChange={this.setAuthodState.bind(this)} 
                    onSave={this.saveAuthor.bind(this)} 
                    errors={this.state.errors}
                    />
            </div>
        )
    }
  }

  module.exports = ManageAuthorPage;
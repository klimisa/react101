"use strict";

var React = require('react');
var PropTypes = require('prop-types'); 
var Input = require('../common/textInput');

class AuthorForm extends React.Component {
    render() {
        return (
            <form>
				<Input 
                    name="firstName" 
                    label="First Name"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName} 
                    error={this.props.errors.firstName} />
				<Input 
                    name="lastName" 
                    label="Last Name"
                    onChange={this.props.onChange}
                    value={this.props.author.lastName} 
                    error={this.props.errors.lastName} />
				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
        )
    }
  }
  
  AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    errors: PropTypes.object,
  };

  module.exports = AuthorForm;
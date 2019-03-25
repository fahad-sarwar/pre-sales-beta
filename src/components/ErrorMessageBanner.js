import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class ErrorMessageBanner extends Component {
    constructor(props) {
        super(props);

        this.displayError = this.displayError.bind(this);
    }

    displayError() {
        return !(this.props.errorMessages === undefined || this.props.errorMessages === '');
    }

    render() {
        if (!this.displayError()) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <Alert color="danger">{this.props.errorMessages}</Alert>
            </div>          
        );
    }
}

ErrorMessageBanner.propTypes  = {
    errorMessages: PropTypes.string.isRequired
};
  
export default ErrorMessageBanner;
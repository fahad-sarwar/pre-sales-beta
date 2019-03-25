import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class ErrorMessageBanner extends Component {
    constructor(props) {
        super(props);

        this.showError = this.showError.bind(this);
    }

    showError() {
        return this.props.errorMessages !== '';
    }

    render() {
        if (!this.showError()) {
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
    errorMessages: PropTypes.string
};
  
export default ErrorMessageBanner;
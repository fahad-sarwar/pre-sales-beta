import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class ErrorMessageBanner extends Component {
    render() {
        if (this.props.errorMessages === '') {
            return (
                <div>
                </div>
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
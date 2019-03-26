import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class ErrorMessageBanner extends Component {
    constructor(props) {
        super(props);

        this.showErrorMessages = this.showErrorMessages.bind(this);
    }

    showErrorMessages() {
        return this.props.errorMessage !== '';
    }

    render() {
        if (!this.showErrorMessages()) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <Alert color="danger">
                    {this.props.errorMessage}
                </Alert>
            </div>          
        );
    }
}

ErrorMessageBanner.propTypes  = {
    errorMessage: PropTypes.string
};
  
export default ErrorMessageBanner;
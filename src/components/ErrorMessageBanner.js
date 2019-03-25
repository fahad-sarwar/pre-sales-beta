import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class ErrorMessageBanner extends Component {
    constructor(props) {
        super(props);

        this.showErrorMessages = this.showErrorMessages.bind(this);
    }

    showErrorMessages() {
        return this.props.errorMessages.length > 0;
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
                    <ul>
                        {
                            this.props.errorMessages.map((item, i) => <li key={i}>{item}</li>)
                        }
                    </ul>
                </Alert>
            </div>          
        );
    }
}

ErrorMessageBanner.propTypes  = {
    errorMessages: PropTypes.array
};
  
export default ErrorMessageBanner;
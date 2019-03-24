import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  FormFeedback,
  Input,
  Row
} from 'reactstrap';

const CALLBACK_ENUMS = {
    FIND_ADDRESS_TASK: 'INSTALLATION_DETAILS/FIND_ADDRESS_TASK'
};

class InstallationDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phoneNumber: this.props.phoneNumber || '01706548458',
            postcode: this.props.postcode || 'LU1 1UL',
            callbackHandler: this.props.callbackHandler,
            postcodeIsValid: true
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange (event) {
        this.setState({[event.target.name]: event.target.value});
    }

    isPostcodeValid() {
        return !(this.state.postcode.trim() === '');
    }

    handleValidation() {
        let formIsValid = true;

        this.setState({postcodeIsValid: this.isPostcodeValid()})

        if(!this.state.postcodeIsValid) {
            formIsValid = false;
        }

        return formIsValid;
    }

    onFormSubmit (event) {
        event.preventDefault();
        
        if(this.handleValidation())
        {
            this.props.callbackHandler(
                CALLBACK_ENUMS.FIND_ADDRESS_TASK, 
                {
                    phoneNumber: this.state.phoneNumber,
                    postcode: this.state.postcode
                }
            );
            return;
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Input
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Enter phone number"
                            value={this.state.phoneNumber}
                            onChange={(event) => this.onInputChange(event)}
                        />
                    </Col>
                    <Col>
                        <Input
                            name="postcode"
                            id="postcode"
                            placeholder="Enter postcode"
                            value={this.state.postcode}
                            onChange={(event) => this.onInputChange(event)}
                            invalid={!this.state.postcodeIsValid}
                        />
                        <FormFeedback valid={this.state.postcodeIsValid}>Please enter a postcode</FormFeedback>
                    </Col>
                    <Col>
                        <Button block color="primary" type="submit" onClick={(event) => this.onFormSubmit(event)}>
                            Check
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

InstallationDetails.protoTypes = {
    phoneNumber: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    callbackHandler: PropTypes.func.isRequired
};

export default InstallationDetails;
export {
    CALLBACK_ENUMS as INSTALLATION_DETAILS_CALLBACK_ENUMS
};
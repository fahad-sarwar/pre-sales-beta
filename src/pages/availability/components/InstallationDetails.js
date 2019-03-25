import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
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
            phoneNumber: this.props.phoneNumber,
            postcode: this.props.postcode,
            postcodeIsValid: true
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    async onInputChange (event) {
        this.setState({[event.target.name]: event.target.value});

        if (event.target.name === 'postcode') {
            console.log('update postcodeIsValid state');
            await this.setState({postcodeIsValid: this.isPostcodeValid()});
        }

        console.log('postcodeIsValid: ' + this.state.postcodeIsValid);
    }

    isPostcodeValid() {
        console.log('isPostcodeValid: ' + this.state.postcode);
        return !(this.state.postcode === '');
    }

    handleValidation() {
        let formIsValid = true;

        this.setState({postcodeIsValid: this.isPostcodeValid()});

        if(!this.state.postcodeIsValid) {
            formIsValid = false;
        }

        return formIsValid;
    }

    onFormSubmit (event) {
        event.preventDefault();
        
        var isValid = this.handleValidation();

        console.log('phoneNumber: ' + this.state.phoneNumber);
        console.log('postcode: ' + this.state.postcode);
        console.log('postcodeIsValid: ' + this.state.postcodeIsValid);

        if(isValid)
        {            
            this.props.callbackHandler(
                CALLBACK_ENUMS.FIND_ADDRESS_TASK, 
                {
                    phoneNumber: this.props.phoneNumber,
                    postcode: this.props.postcode
                }
            );
            return;
        }
    }

    render() {
        return (
            <Card>
                <CardHeader>Check Availability</CardHeader>
                <CardBody>
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
                </CardBody>
            </Card>
        );
    }
}

InstallationDetails.propTypes  = {
    phoneNumber: PropTypes.string,
    postcode: PropTypes.string,
    callbackHandler: PropTypes.func.isRequired
};

export default InstallationDetails;
export {
    CALLBACK_ENUMS as INSTALLATION_DETAILS_CALLBACK_ENUMS
};
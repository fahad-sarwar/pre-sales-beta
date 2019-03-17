import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button,
  Col,
  FormFeedback,
  Input,
  Row
} from 'reactstrap';
import { findAddresses } from '../actions/index';

class InstallationDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postcodeIsValid: true
        };

        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.onPostcodeChange = this.onPostcodeChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onPhoneNumberChange (phoneNumber) {
        this.props.dispatch('phoneNumber', phoneNumber);
    }

    onPostcodeChange (postcode) {
        this.props.dispatch('postcode', postcode);
    }

    isPostcodeValid() {
        return !(this.props.postcode.trim() === '');
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
            this.props.findAddresses(this.props.postcode, this.props.phoneNumber);
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
                            value={this.props.phoneNumber}
                            onChange={(event) => this.onPhoneNumberChange(event.target.value)}
                        />
                    </Col>
                    <Col>
                        <Input
                            name="postcode"
                            id="postcode"
                            placeholder="Enter postcode"
                            value={this.props.postcode}
                            onChange={(event) => this.onPostcodeChange(event.target.value)}
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

function mapStateToProps(state) {
    return {
        phoneNumber: state.phoneNumber,
        postcode: state.postcode
    };
}
  
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ findAddresses }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InstallationDetails)
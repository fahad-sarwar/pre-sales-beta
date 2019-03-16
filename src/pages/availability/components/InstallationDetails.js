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
            phoneNumber: '',
            postcode: 'LU1 1UL',
            postcodeIsValid: true
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange (event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
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
            this.props.findAddresses(this.state.postcode);
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
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({ findAddresses }, dispatch)
}

export default connect(null, mapDispatchToProps)(InstallationDetails)
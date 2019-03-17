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
            phoneNumber: this.props.phoneNumber || '01706548458',
            postcode: this.props.postcode || 'LU1 1UL',
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
            this.props.actions.findAddresses(this.state.postcode, this.state.phoneNumber);
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
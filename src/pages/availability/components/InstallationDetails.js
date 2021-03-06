import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  FormFeedback,
  Input,
  Row
} from "reactstrap";

const CALLBACK_ENUMS = {
  FIND_ADDRESS_TASK: "INSTALLATION_DETAILS/FIND_ADDRESS_TASK"
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

  async onInputChange(event) {
    this.setState(
      { [event.target.name]: event.target.value },
      this.handleValidation
    );
  }

  isPostcodeValid() {
    return !(this.state.postcode === "");
  }

  handleValidation() {
    let formIsValid = true;

    this.setState({ postcodeIsValid: this.isPostcodeValid() });

    if (!this.state.postcodeIsValid) {
      formIsValid = false;
    }

    return formIsValid;
  }

  onFormSubmit(event) {
    event.preventDefault();

    if (this.handleValidation()) {
      this.props.callbackHandler(CALLBACK_ENUMS.FIND_ADDRESS_TASK, {
        phoneNumber: this.state.phoneNumber,
        postcode: this.state.postcode
      });
      return;
    }
  }

  render() {
    return (
      <Card>
        <CardHeader>Availability Checker</CardHeader>
        <CardBody>
          <CardText>
            This page enables you to perform an availability check by specifying
            the Customer's phonenumber and / or postcode.
          </CardText>
          <ul>
            <li>
              Specifying just a phone number returns broadband availability.
            </li>
            <li>
              Specifying just a postcode returns broadband and phone line
              availability.
            </li>
            <li>
              Specifying a phonenumber and postcode returns phone line
              installation details and broadband and phone line availability.
            </li>
          </ul>
          <Row>
            <Col>
              <Input
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter phone number"
                value={this.state.phoneNumber}
                onChange={event => this.onInputChange(event)}
              />
            </Col>
            <Col>
              <Input
                name="postcode"
                id="postcode"
                placeholder="Enter postcode"
                value={this.state.postcode}
                onChange={event => this.onInputChange(event)}
                invalid={!this.state.postcodeIsValid}
              />
              <FormFeedback valid={this.state.postcodeIsValid}>
                Please enter a postcode
              </FormFeedback>
            </Col>
            <Col>
              <Button
                block
                color="primary"
                type="submit"
                onClick={event => this.onFormSubmit(event)}
              >
                Check
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

InstallationDetails.propTypes = {
  phoneNumber: PropTypes.string,
  postcode: PropTypes.string,
  callbackHandler: PropTypes.func.isRequired
};

export default InstallationDetails;
export { CALLBACK_ENUMS as INSTALLATION_DETAILS_CALLBACK_ENUMS };

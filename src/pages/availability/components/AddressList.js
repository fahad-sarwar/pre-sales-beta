import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Row,
  Spinner
} from "reactstrap";
import Select from "react-select";

const CALLBACK_ENUMS = {
  ADDRESS_SELECTED_TASK: "ADDRESS_LIST/ADDRESS_SELECTED_TASK"
};

class AddressList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedInstallationAddressIndex: 0
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  async onInputChange(opt) {
    this.setState({ selectedInstallationAddressIndex: opt.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.callbackHandler(CALLBACK_ENUMS.ADDRESS_SELECTED_TASK, {
      selectedInstallationAddressIndex: this.state
        .selectedInstallationAddressIndex,
      selectedInstallationAddress: this.props.addresses[
        this.state.selectedInstallationAddressIndex
      ]
    });
  }

  render() {
    if (this.props.addressListVisibility === "HIDE") {
      return <div />;
    }

    if (this.props.addressListVisibility === "LOADING") {
      return (
        <Row>
          <Col>
            <div className="text-center">
              <Spinner color="primary" />
            </div>
          </Col>
        </Row>
      );
    }

    if (this.props.addressListVisibility === "NO-ADDRESSES-FOUND") {
      return (
        <Row>
          <Col>
            <Alert color="warning">
              Did not find any matching addresses for postcode '
              {this.props.postcode}'.
            </Alert>
          </Col>
        </Row>
      );
    }

    return (
      <Card>
        <CardHeader>Select Address</CardHeader>
        <CardBody>
          <CardText>
            Please select your address from the following list:
          </CardText>
          <Row>
            <Col>
              <Select
                options={this.props.addresses.map((address, i) => ({
                  label: address.fullAddress,
                  value: i
                }))}
                onChange={opt => this.onInputChange(opt)}
              />
            </Col>
          </Row>
          <Row>
            <Col>&nbsp;</Col>
          </Row>
          <Row>
            <Col>
              <Button
                color="primary"
                block
                onClick={event => this.onFormSubmit(event)}
              >
                Select
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

AddressList.propTypes = {
  addressListVisibility: PropTypes.string.isRequired,
  postcode: PropTypes.string,
  addresses: PropTypes.array,
  selectedInstallationAddress: PropTypes.object,
  callbackHandler: PropTypes.func
};

export default AddressList;
export { CALLBACK_ENUMS as ADDRESS_LIST_CALLBACK_ENUMS };

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
  Input,
  Row,
  Spinner
} from "reactstrap";

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

  async onInputChange(event) {
    this.setState({ selectedInstallationAddressIndex: event.target.value });
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
              No addresses found matching postcode '{this.props.postcode}'
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
              <Input
                type="select"
                name="selectAddress"
                as="selectAddress"
                size="7"
                onChange={event => this.onInputChange(event)}
                defaultValue={this.state.selectedInstallationAddressIndex}
              >
                {this.props.addresses.map((address, i) => (
                  <option
                    key={i}
                    value={i}
                    data-address-key={address.addressKey}
                    data-district-code={address.districtCode}
                    data-country={address.country}
                    data-county={address.county}
                    data-dependent-thoroughfare-name={
                      address.dependentThoroughfareName
                    }
                    data-double-dependent-locality={
                      address.doubleDependentLocality
                    }
                    data-easting={address.easting}
                    data-full-address={address.fullAddress}
                    data-locality={address.locality}
                    data-northing={address.northing}
                    data-organisation-name={address.organisationName}
                    data-po-box={address.poBox}
                    data-post-code={address.postCode}
                    data-post-town={address.postTown}
                    data-premises-name={address.premisesName}
                    data-sub-premises={address.subPremises}
                    data-thoroughfare-name={address.thoroughfareName}
                    data-thoroughfare-number={address.thoroughfareNumber}
                  >
                    {address.fullAddress}
                  </option>
                ))}
              </Input>
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

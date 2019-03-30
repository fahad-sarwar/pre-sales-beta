import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import ErrorMessageBanner from "../../components/ErrorMessageBanner";
import InstallationDetails, {
  INSTALLATION_DETAILS_CALLBACK_ENUMS
} from "./components/InstallationDetails";
import AddressList, {
  ADDRESS_LIST_CALLBACK_ENUMS
} from "./components/AddressList";
import BroadbandResults from "./components/BroadbandResults";
import { findAddresses } from "./actions/findAddresses";
import { availabilityCheck } from "./actions/availabilityCheck";

class CheckAvailability extends Component {
  constructor(props) {
    super(props);

    this.callbackHandler = this.callbackHandler.bind(this);
  }

  callbackHandler = (type, data) => {
    switch (type) {
      case INSTALLATION_DETAILS_CALLBACK_ENUMS.FIND_ADDRESS_TASK:
        this.props.dispatch(findAddresses(data));
        break;
      case ADDRESS_LIST_CALLBACK_ENUMS.ADDRESS_SELECTED_TASK:
        this.props.dispatch(availabilityCheck(data));
        break;
      default:
        console.log("Do nothing!");
        break;
    }
  };

  render() {
    return (
      <div>
        <ErrorMessageBanner errorMessage={this.props.errorMessage} />

        <InstallationDetails
          phoneNumber={this.props.phoneNumber}
          postcode={this.props.postcode}
          callbackHandler={this.callbackHandler}
        />

        <Row>
          <Col>&nbsp;</Col>
          <Col>&nbsp;</Col>
        </Row>

        <AddressList
          addressListVisibility={this.props.addressListVisibility}
          postcode={this.props.postcode}
          addresses={this.props.addresses}
          callbackHandler={this.callbackHandler}
        />

        <Row>
          <Col>&nbsp;</Col>
          <Col>&nbsp;</Col>
        </Row>
        <BroadbandResults
          broadbandResultVisibility={this.props.broadbandResultVisibility}
          availabilityCheckResult={this.props.availabilityCheckResult}
          selectedInstallationAddress={this.props.selectedInstallationAddress}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addressListVisibility: state.addressSearch.addressListVisibility,
    errorMessage: state.addressSearch.errorMessage,
    phoneNumber: state.addressSearch.phoneNumber,
    postcode: state.addressSearch.postcode,
    addresses: state.addressSearch.addresses,
    selectedInstallationAddress:
      state.availabilityCheck.selectedInstallationAddress,
    broadbandResultVisibility:
      state.availabilityCheck.broadbandResultVisibility,
    availabilityCheckResult: state.availabilityCheck.availabilityCheckResult
  };
}

export default connect(mapStateToProps)(CheckAvailability);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Row
} from 'reactstrap';
import ErrorMessageBanner from '../../components/ErrorMessageBanner';
import InstallationDetails, { INSTALLATION_DETAILS_CALLBACK_ENUMS } from './components/InstallationDetails';
import AddressList from './components/AddressList';
import BroadbandResults from './components/BroadbandResults';
import { findAddresses } from './actions/index';

class CheckAvailability extends Component {
    constructor(props) {
        super(props);

        this.callbackHandler = this.callbackHandler.bind(this);
    }

    callbackHandler = (type, data) => {
        switch(type) {
            case INSTALLATION_DETAILS_CALLBACK_ENUMS.FIND_ADDRESS_TASK:
                this.props.dispatch(findAddresses(data));
                break;
            default:
                console.log('Do nothing!');
                break;
        }
    }

    render() {
        return (
            <div>
                <ErrorMessageBanner errorMessages={this.props.errorMessages} />
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
                    loadingAddresses={this.props.loadingAddresses}
                    addresses={this.props.addresses}
                    callbackHandler={this.callbackHandler}
                />
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <BroadbandResults />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessages: state.findAddress.errorMessages,
        phoneNumber: state.findAddress.phoneNumber,
        postcode: state.findAddress.postcode,
        loadingAddresses: state.findAddress.loadingAddresses,
        addresses: state.findAddress.addresses
    };
}

export default connect(mapStateToProps)(CheckAvailability);
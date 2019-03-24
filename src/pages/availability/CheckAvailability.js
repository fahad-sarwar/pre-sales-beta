import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
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
                <Card>
                    <CardHeader>Check Availability</CardHeader>
                    <CardBody>
                        <InstallationDetails
                            phoneNumber={this.props.phoneNumber}
                            postcode={this.props.postcode}
                            callbackHandler={this.callbackHandler}
                        />
                    </CardBody>
                </Card>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Card>
                    <CardHeader>Select Address</CardHeader>
                    <CardBody>
                        <AddressList />
                    </CardBody>
                </Card>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Card>
                    <CardHeader>Results</CardHeader>
                    <CardBody>
                        <BroadbandResults />
                    </CardBody>
                </Card>
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

export default connect(mapStateToProps)(CheckAvailability);
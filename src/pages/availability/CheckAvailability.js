import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import InstallationDetails from './components/InstallationDetails';
import AddressList from './components/AddressList';
import BroadbandResults from './components/BroadbandResults';

class CheckAvailability extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Check Availability</CardHeader>
                    <CardBody>
                        <InstallationDetails />
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
  
  export default CheckAvailability;
import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

class CheckAvailability extends Component {
    render() {
        return (
            <div>
                <Container className="navbar-body-padding">
                <Card>
                <CardHeader>Check Availability</CardHeader>
                    <CardBody>
                    <Row>
                        <Col>
                        <Input
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Enter phone number"
                        />
                        </Col>
                        <Col>
                        <Input
                            name="postcode"
                            id="postcode"
                            placeholder="Enter postcode"
                        />
                        </Col>
                        <Col>
                        <Button block color="primary" type="submit">
                            Check
                        </Button>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Card>
                <CardHeader>Select Address</CardHeader>
                    <CardBody>
                    <Row>
                        <Col>
                        <Input
                            type="select"
                            name="selectAddress"
                            as="selectAddress"
                            multiple
                        >
                            <option>
                            1 High Street, Rochdale, Lancashire, OL11 5ED
                            </option>
                            <option>
                            3 High Street, Rochdale, Lancashire, OL11 5ED
                            </option>
                            <option>
                            5 High Street, Rochdale, Lancashire, OL11 5ED
                            </option>
                            <option>
                            7 High Street, Rochdale, Lancashire, OL11 5ED
                            </option>
                            <option>
                            9 High Street, Rochdale, Lancashire, OL11 5ED
                            </option>
                            <option>
                            11 High Street, Rochdale, Lancashire, OL11 5ED
                            </option>
                            <option>
                            13 High Street, Rochdale, Lancashire, OL11 5ED
                            </option>
                        </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button color="primary" block>
                            Select
                        </Button>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Card>
                <CardHeader>Results</CardHeader>
                    <CardBody>
                    <Row>
                        <Col xs="1">Product</Col>
                        <Col xs="1">RAG</Col>
                        <Col xs="1">Exchge</Col>
                        <Col xs="4">Reason Code</Col>
                        <Col xs="2">Download</Col>
                        <Col xs="1">Upload</Col>
                        <Col xs="1">Min</Col>
                        <Col xs="1">Max</Col>
                    </Row>
                    <Row>
                        <Col xs="1">
                        <label>ADSL</label>
                        </Col>
                        <Col xs="1">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        </Col>
                        <Col xs="1">
                        <label>Enabled</label>
                        </Col>
                        <Col xs="4">
                        <label>Broadband on fibre technology</label>
                        </Col>
                        <Col xs="2">
                        <label>67700</label>
                        </Col>
                        <Col xs="1">
                        <label>19000</label>
                        </Col>
                        <Col xs="1">
                        <label>66200</label>
                        </Col>
                        <Col xs="1">
                        <label>80000</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="1">
                        <label>Fibre</label>
                        </Col>
                        <Col xs="1">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        </Col>
                        <Col xs="1">
                        <label>Enabled</label>
                        </Col>
                        <Col xs="4">
                        <label>Broadband on fibre technology</label>
                        </Col>
                        <Col xs="2">
                        <label>7500</label>
                        </Col>
                        <Col xs="1">
                        <label>1000</label>
                        </Col>
                        <Col xs="1">
                        <label>6500</label>
                        </Col>
                        <Col xs="1">
                        <label>8500</label>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
                </Container>
            </div>
        );
    }
  }
  
  export default CheckAvailability;
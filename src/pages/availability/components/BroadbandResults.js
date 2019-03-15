import React, { Component } from 'react';
import {
  Col,
  Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class BroadbandResults extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
  }
  
  export default BroadbandResults;
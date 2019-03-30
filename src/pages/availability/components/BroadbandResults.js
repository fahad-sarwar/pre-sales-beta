import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Spinner
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class BroadbandResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingAvailabilityResults: this.props.loadingAvailabilityResults
    };

    // this.onInputChange = this.onInputChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    if (this.props.broadbandResultsStatus === "hide") {
      return <div />;
    }

    if (this.props.broadbandResultsStatus === "loading") {
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

    if (this.props.addressListStatus === "availability-check-failure") {
      return (
        <Row>
          <Col>
            <Alert color="warning">Availability check failed</Alert>
          </Col>
        </Row>
      );
    }

    return (
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
    );
  }
}

BroadbandResults.propTypes = {
  broadbandResultsStatus: PropTypes.string.isRequired
};

export default BroadbandResults;

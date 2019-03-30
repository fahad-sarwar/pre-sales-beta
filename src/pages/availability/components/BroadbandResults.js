import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Alert,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Row,
  Spinner,
  Table
} from "reactstrap";
import TechnologyAvailabilityFlag from "./TechnologyAvailabilityFlag";

class BroadbandResults extends Component {
  hypenateZeroSpeeds(speed) {
    return speed === 0 ? "-" : speed;
  }

  render() {
    if (this.props.broadbandResultVisibility === "HIDE") {
      return <div />;
    }

    if (this.props.broadbandResultVisibility === "LOADING") {
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

    if (this.props.broadbandResultVisibility === "AVAILABILITY-CHECK-FAILED") {
      return (
        <Row>
          <Col>
            <Alert color="warning">Availability check failed</Alert>
          </Col>
        </Row>
      );
    }

    if (!this.props.availabilityCheckResult.summary.wasSuccessful) {
      return (
        <Row>
          <Col>
            <Alert color="warning">Availability check failed</Alert>
          </Col>
        </Row>
      );
    }

    const copperResults = this.props.availabilityCheckResult.copper;
    const fttcResults = this.props.availabilityCheckResult.fttc;
    const gFastResults = this.props.availabilityCheckResult.gFast;
    const fttpResults = this.props.availabilityCheckResult.fttp;

    const technologies = [
      {
        product: "Copper",
        isAvailable: copperResults.isAvailable,
        downloadInKbps: this.hypenateZeroSpeeds(
          copperResults.speedResults.typicalDownloadSpeedInKbps
        ),
        uploadInKbps: "-",
        maxDownloadInKbps: this.hypenateZeroSpeeds(
          copperResults.speedResults.maxDownloadSpeedInKbps
        ),
        minDownloadInKbps: this.hypenateZeroSpeeds(
          copperResults.speedResults.minDownloadSpeedInKbps
        )
      },
      {
        product: "FTTC",
        isAvailable: fttcResults.isAvailable,
        downloadInKbps: this.hypenateZeroSpeeds(
          fttcResults.speedResults.downloadSpeedInKbps
        ),
        uploadInKbps: this.hypenateZeroSpeeds(
          fttcResults.speedResults.uploadSpeedInKbps
        ),
        maxDownloadInKbps: this.hypenateZeroSpeeds(
          fttcResults.speedResults.speedRangeMaxInKbps
        ),
        minDownloadInKbps: this.hypenateZeroSpeeds(
          fttcResults.speedResults.speedRangeMinInKbps
        )
      },
      {
        product: "gFast",
        isAvailable: fttpResults.isAvailable,
        downloadInKbps: "-",
        uploadInKbps: "-",
        maxDownloadInKbps: "-",
        minDownloadInKbps: "-"
      },
      {
        product: "FTTP",
        isAvailable: gFastResults.isAvailable,
        downloadInKbps: this.hypenateZeroSpeeds(
          gFastResults.speedResults.downloadSpeedInKbps
        ),
        uploadInKbps: this.hypenateZeroSpeeds(
          gFastResults.speedResults.uploadSpeedInKbps
        ),
        maxDownloadInKbps: this.hypenateZeroSpeeds(
          gFastResults.speedResults.speedRangeMaxInKbps
        ),
        minDownloadInKbps: this.hypenateZeroSpeeds(
          gFastResults.speedResults.speedRangeMinInKbps
        )
      }
    ];

    return (
      <Card>
        <CardHeader>Results</CardHeader>
        <CardBody>
          <CardText>
            BT Availability Checker results for address &nbsp;
            <Badge color="info">
              {this.props.selectedInstallationAddress.fullAddress}
            </Badge>
          </CardText>
          <Table striped bordered hover responsive size="sm">
            <thead>
              <tr>
                <th className="text-center">Product</th>
                <th className="text-center">RAG</th>
                <th className="text-center">Download (Kbps)</th>
                <th className="text-center">Upload (Kbps)</th>
                <th className="text-center">Min Range (Kbps)</th>
                <th className="text-center">Max Range (Kbps)</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {technologies.map((technology, i) => (
                <tr key={"tr" + i}>
                  <th scope="row" className="text-center">
                    {technology.product}
                  </th>
                  <td className="text-center">
                    <TechnologyAvailabilityFlag
                      isAvailable={technology.isAvailable}
                    />
                  </td>
                  <td className="text-center">{technology.downloadInKbps}</td>
                  <td className="text-center">{technology.uploadInKbps}</td>
                  <td className="text-center">
                    {technology.maxDownloadInKbps}
                  </td>
                  <td className="text-center">
                    {technology.minDownloadInKbps}
                  </td>
                  <td className="text-center">
                    {technology.isAvailable && (
                      <Button
                        color="primary"
                        size="sm"
                        disabled={!technology.isAvailable}
                        block
                      >
                        Place Order
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

BroadbandResults.propTypes = {
  broadbandResultVisibility: PropTypes.string.isRequired,
  availabilityCheckResult: PropTypes.object,
  selectedInstallationAddress: PropTypes.object
};

export default BroadbandResults;

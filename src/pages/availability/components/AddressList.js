import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Input,
    Row,
    Spinner
} from 'reactstrap';

class AddressList extends Component {
    render() {
        if (this.props.loadingAddresses === null) {
            return (
                <div>
                </div>
            );
        }

        if (this.props.loadingAddresses) {
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

        if (this.props.addresses.length === 0) {
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
                    <Row>
                        <Col>
                            <Input
                                type="select"
                                name="selectAddress"
                                as="selectAddress"
                                multiple
                            >
                                {
                                    this.props.addresses.map((address, i) =>
                                        <option key={i}
                                            data-address-key={address.addressKey}
                                            data-district-code={address.districtCode}
                                            data-country={address.country}
                                            data-county={address.county}
                                            data-dependent-thoroughfare-name={address.dependentThoroughfareName}
                                            data-double-dependent-locality={address.doubleDependentLocality}
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
                                            data-thoroughfare-number={address.thoroughfareNumber}>
                                            {address.fullAddress}
                                        </option>
                                    )
                                }
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
        );
    }
  }

  AddressList.propTypes  = {
      loadingAddresses: PropTypes.bool,
      postcode: PropTypes.string,
      addresses: PropTypes.array,
      callbackHandler: PropTypes.func
  };
  
  export default AddressList;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
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
    constructor(props) {
        super(props);

        this.state = {
            loadingAddresses: this.props.loadingAddresses,
            addresses: this.props.addresses,
            addressErrorMessage: this.props.addressErrorMessage,
            callbackHandler: this.props.callbackHandler
        };

        // this.onInputChange = this.onInputChange.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        if (!this.state.loadingAddresses) {
            return (
                <div>
                </div>
            );
        }

        if (this.state.loadingAddresses === false) {
            return (
                <div className="text-center">
                    <Spinner color="primary" />
                </div>
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
        );
    }
  }

  AddressList.propTypes  = {
      loadingAddresses: PropTypes.bool,
      addresses: PropTypes.array.isRequired,
      addressErrorMessage: PropTypes.string.isRequired,
      callbackHandler: PropTypes.func.isRequired
  };
  
  export default AddressList;
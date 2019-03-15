import React, { Component } from 'react';
import {
  Button,
  Col,
  Input,
  Row
} from 'reactstrap';

class AddressList extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
  }
  
  export default AddressList;
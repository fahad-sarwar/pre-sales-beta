import React, { Component } from 'react';
import {
  Button,
  Col,
  Input,
  Row
} from 'reactstrap';

class InstallationDetails extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
  }
  
  export default InstallationDetails;
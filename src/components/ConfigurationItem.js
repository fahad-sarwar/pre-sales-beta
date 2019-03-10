import React, { Component } from 'react';
import {
    Col,
    Input,
    Label,
    Row
  } from 'reactstrap';

  class ConfigurationItem extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col xs="3" className="text-right">
                        <Label>{this.props.name}:</Label>
                    </Col>
                    <Col xs="9">
                        <Input
                            id="environment"
                            value={this.props.value}
                            disabled
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
  
 export default ConfigurationItem;
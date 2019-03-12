import React, { Component } from 'react';
import {
    Col,
    Input,
    Label,
    Row
  } from 'reactstrap';
  import PropTypes from 'prop-types';

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
                            value={this.props.value}
                            disabled
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

ConfigurationItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}
  
 export default ConfigurationItem;
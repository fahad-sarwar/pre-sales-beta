import React, { Component } from 'react';
import {
    Col,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import PropTypes from 'prop-types';

  class ConfigurationItem extends Component {

    render() {

        return (
            <FormGroup row>
                <Label xs={3} className="text-right">{this.props.name}:</Label>
                <Col xs={9}>
                    <Input name={this.props.name} value={this.props.value} readOnly />
                </Col>
            </FormGroup>
        );
    }
}

ConfigurationItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}
  
 export default ConfigurationItem;
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
            <FormGroup row key={"formGroup" + this.props.name}>
                <Label xs={3} className="text-right" key={"label" + this.props.name}>{this.props.name}:</Label>
                <Col xs={9} key={"col" + this.props.name}>
                    <Input name={this.props.name} value={this.props.value} readOnly key={"input" + this.props.name} />
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
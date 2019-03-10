import React, { Component } from 'react';
import {Col, Row } from 'reactstrap';

  class EmptyRow extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
            </div>
        );
    }
}
  
 export default EmptyRow;
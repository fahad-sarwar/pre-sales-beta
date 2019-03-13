import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Form } from 'reactstrap';
import ConfigurationItemList from './components/ConfigurationItemList';

class Configuration extends Component {

    render() {        
        return (
            <div>
                <Card>
                    <CardHeader>Configuration Items</CardHeader>
                    <CardBody>
                        <Form>
                            <ConfigurationItemList/>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
  
 export default Configuration;
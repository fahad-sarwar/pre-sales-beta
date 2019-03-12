import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Form } from 'reactstrap';
import ConfigurationItem from '../components/ConfigurationItem';
// import Config from '../configuration/Config';

class Configuration extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Configuration Items</CardHeader>
                    <CardBody>
                        <Form>
                            <ConfigurationItem name="Node Environment" value={process.env.NODE_ENV} />
                            <ConfigurationItem name="Environment" value={process.env.REACT_APP_ENVIRONMENT} />
                            <ConfigurationItem name="Bearer Token Authority" value={process.env.REACT_APP_BEARERTOKENAUTHORITY} />
                            <ConfigurationItem name="Identity Server Url" value={process.env.REACT_APP_IDENTITYSERVERURL} />
                            <ConfigurationItem name="Client Id" value={process.env.REACT_APP_CLIENTID} />
                            <ConfigurationItem name="Redirect Url" value={process.env.REACT_APP_REDIRECTURL} />
                            <ConfigurationItem name="Post Logout Redirect Url" value={process.env.REACT_APP_POSTLOGOUTREDIRECTURL} />
                            <ConfigurationItem name="Scopes" value={process.env.REACT_APP_SCOPES} />
                            <ConfigurationItem name="Silent Redirect Url" value={process.env.REACT_APP_SILENTREDIRECTURL} />
                            <ConfigurationItem name="Signout Url" value={process.env.REACT_APP_SIGNOUTURL} />
                            <ConfigurationItem name="Authorisation Url" value={process.env.REACT_APP_AUTHORISATIONURL} />
                            <ConfigurationItem name="Dialogue Services Url" value={process.env.REACT_APP_DIALOGUESERVICESURL} />
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
  
 export default Configuration;
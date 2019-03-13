import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Form } from 'reactstrap';
import ConfigurationItem from '../components/ConfigurationItem';
import Config from '../configuration/Config.js';

class Configuration extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Configuration Items</CardHeader>
                    <CardBody>
                        <Form>
                            <ConfigurationItem name="Node Environment" value={Config.nodeEnvironment} />
                            <ConfigurationItem name="Environment" value={Config.environment} />
                            <ConfigurationItem name="Bearer Token Authority" value={Config.bearerTokenAuthority} />
                            <ConfigurationItem name="Identity Server Url" value={Config.identityServerUrl} />
                            <ConfigurationItem name="Client Id" value={Config.clientId} />
                            <ConfigurationItem name="Redirect Url" value={Config.redirectUrl} />
                            <ConfigurationItem name="Post Logout Redirect Url" value={Config.postLogoutRedirectUrl} />
                            <ConfigurationItem name="Scopes" value={Config.scopes} />
                            <ConfigurationItem name="Silent Redirect Url" value={Config.silentRedirectUrl} />
                            <ConfigurationItem name="Signout Url" value={Config.signoutUrl} />
                            <ConfigurationItem name="Authorisation Url" value={Config.authorisationUrl} />
                            <ConfigurationItem name="Dialogue Services Url" value={Config.dialogueServicesUrl} />
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
  
 export default Configuration;
import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import ConfigurationItem from '../components/ConfigurationItem';
import EmptyRow from '../components/EmptyRow';

class Configuration extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Configuration Items</CardHeader>
                    <CardBody>
                        <ConfigurationItem name="Node Environment" value={process.env.NODE_ENV} />
                        <EmptyRow />
                        <ConfigurationItem name="Environment" value={process.env.REACT_APP_ENVIRONMENT} />
                        <EmptyRow />
                        <ConfigurationItem name="Bearer Token Authority" value={process.env.REACT_APP_BEARERTOKENAUTHORITY} />
                        <EmptyRow />
                        <ConfigurationItem name="Identity Server Url" value={process.env.REACT_APP_IDENTITYSERVERURL} />
                        <EmptyRow />
                        <ConfigurationItem name="Client Id" value={process.env.REACT_APP_CLIENTID} />
                        <EmptyRow />
                        <ConfigurationItem name="Redirect Url" value={process.env.REACT_APP_REDIRECTURL} />
                        <EmptyRow />
                        <ConfigurationItem name="Post Logout Redirect Url" value={process.env.REACT_APP_POSTLOGOUTREDIRECTURL} />
                        <EmptyRow />
                        <ConfigurationItem name="Scopes" value={process.env.REACT_APP_SCOPES} />
                        <EmptyRow />
                        <ConfigurationItem name="Silent Redirect Url" value={process.env.REACT_APP_SILENTREDIRECTURL} />
                        <EmptyRow />
                        <ConfigurationItem name="Signout Url" value={process.env.REACT_APP_SIGNOUTURL} />
                        <EmptyRow />
                        <ConfigurationItem name="Authorisation Url" value={process.env.REACT_APP_AUTHORISATIONURL} />
                        <EmptyRow />
                        <ConfigurationItem name="Dialogue Services Url" value={process.env.REACT_APP_DIALOGUESERVICESURL} />
                    </CardBody>
                </Card>
            </div>
        );
    }
}
  
 export default Configuration;
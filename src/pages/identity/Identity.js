import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Col, Form, FormGroup, Input, Label } from 'reactstrap';

class Identity extends Component {

    constructor(props) {
        super(props);

        this.state = {
            identity: JSON.parse(localStorage.getItem('state'))
        };
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Configuration Items</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Id Token:</Label>
                                <Col xs={9}>
                                    <Input type="textarea" name="idToken" value={this.state.identity.id_token} rows={5} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Session State:</Label>
                                <Col xs={9}>
                                    <Input name="sessionState" value={this.state.identity.session_state} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Access Token:</Label>
                                <Col xs={9}>
                                    <Input type="textarea" name="accessToken" value={this.state.identity.access_token} rows={5} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Token Type:</Label>
                                <Col xs={9}>
                                    <Input name="tokenType" value={this.state.identity.token_type} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Scope:</Label>
                                <Col xs={9}>
                                    <Input name="scope" value={this.state.identity.scope} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">SID:</Label>
                                <Col xs={9}>
                                    <Input name="profileSid" value={this.state.identity.profile.sid} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Sub:</Label>
                                <Col xs={9}>
                                    <Input name="profileSub" value={this.state.identity.profile.sub} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Expires At:</Label>
                                <Col xs={9}>
                                    <Input name="expiresAt" value={this.state.identity.expires_at} readOnly />
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
  
 export default Identity;
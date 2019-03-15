import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import IdentityConfig from '../../helpers/Identity';

class Identity extends Component {
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
                                    <Input type="textarea" name="idToken" value={IdentityConfig.idToken} rows={5} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Session State:</Label>
                                <Col xs={9}>
                                    <Input name="sessionState" value={IdentityConfig.sessionState} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Access Token:</Label>
                                <Col xs={9}>
                                    <Input type="textarea" name="accessToken" value={IdentityConfig.accessToken} rows={5} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Token Type:</Label>
                                <Col xs={9}>
                                    <Input name="tokenType" value={IdentityConfig.tokenType} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Scope:</Label>
                                <Col xs={9}>
                                    <Input name="scope" value={IdentityConfig.scope} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">SID:</Label>
                                <Col xs={9}>
                                    <Input name="profileSid" value={IdentityConfig.sid} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Sub:</Label>
                                <Col xs={9}>
                                    <Input name="profileSub" value={IdentityConfig.sub} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Expires At:</Label>
                                <Col xs={9}>
                                    <Input name="expiresAt" value={IdentityConfig.expiresAt} readOnly />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label xs={3} className="text-right">Expiry Date:</Label>
                                <Col xs={9}>
                                    <Input name="expiresAt" value={IdentityConfig.expiryDate} readOnly />
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
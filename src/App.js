import React, { Component } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#availabilityChecker">
                Availability Checker
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="navbar-body-padding">
          <Card>
            <Card.Body>
              <h4>Check Availability</h4>
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="Enter phone number" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Enter postcode" />
                  </Col>
                  <Col>
                    <Button variant="primary" type="submit" block>
                      Check
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Card.Body>
          </Card>
          <Row>
            <Col>&nbsp;</Col>
            <Col>&nbsp;</Col>
          </Row>
          <Card>
            <Card.Body>
              <h4>Select Address</h4>
              <Form>
                <Form.Group>
                  <Form.Control as="select" multiple>
                    <option>
                      1 High Street, Rochdale, Lancashire, OL11 5ED
                    </option>
                    <option>
                      3 High Street, Rochdale, Lancashire, OL11 5ED
                    </option>
                    <option>
                      5 High Street, Rochdale, Lancashire, OL11 5ED
                    </option>
                    <option>
                      7 High Street, Rochdale, Lancashire, OL11 5ED
                    </option>
                    <option>
                      9 High Street, Rochdale, Lancashire, OL11 5ED
                    </option>
                    <option>
                      11 High Street, Rochdale, Lancashire, OL11 5ED
                    </option>
                    <option>
                      13 High Street, Rochdale, Lancashire, OL11 5ED
                    </option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Select
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Row>
            <Col>&nbsp;</Col>
            <Col>&nbsp;</Col>
          </Row>
          <h4>Results</h4>
          <Card>
            <Card.Body>
              <Row>
                <Col md={1}>Product</Col>
                <Col md={1}>RAG</Col>
                <Col md={2}>Exchange</Col>
                <Col md={3}>Reason Code</Col>
                <Col md={2}>Download</Col>
                <Col md={1}>Upload</Col>
                <Col md={1}>Min</Col>
                <Col md={1}>Max</Col>
              </Row>
              <Row>
                <Col>
                  <label>ADSL</label>
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </Col>
                <Col>
                  <label>Enabled</label>
                </Col>
                <Col>
                  <label>Broadband on fibre technology</label>
                </Col>
                <Col>
                  <label>67700</label>
                </Col>
                <Col>
                  <label>19000</label>
                </Col>
                <Col>
                  <label>66200</label>
                </Col>
                <Col>
                  <label>80000</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>Fibre</label>
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </Col>
                <Col>
                  <label>Enabled</label>
                </Col>
                <Col>
                  <label>Broadband on fibre technology</label>
                </Col>
                <Col>
                  <label>7500</label>
                </Col>
                <Col>
                  <label>1000</label>
                </Col>
                <Col>
                  <label>6500</label>
                </Col>
                <Col>
                  <label>8500</label>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;

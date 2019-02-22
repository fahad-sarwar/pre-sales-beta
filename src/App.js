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
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
            <Card.Header>Check Availability</Card.Header>
            <Card.Body>
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
            <Card.Header>Select Address</Card.Header>
            <Card.Body>
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
          <div>
            Favorite Food: <FontAwesomeIcon icon={faCoffee} />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Collapse,
  Container,
  Form,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.state({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="lg" color="dark">
          <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#availabilityChecker">
                  Availability Checker
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container className="navbar-body-padding">
          <Card>
            <CardBody>
              <CardTitle>Check Availability</CardTitle>
              <Form inline>
                <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
                  <Input
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter phone number"
                    className="mr-sm-2"
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input
                    name="postcode"
                    id="postcode"
                    placeholder="Enter postcode"
                    className="mr-sm-2"
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Button color="primary" type="submit" block>
                    Check
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <Row>
            <Col>&nbsp;</Col>
            <Col>&nbsp;</Col>
          </Row>
          <Card>
            <CardBody>
              <CardTitle>Select Address</CardTitle>
              <Form>
                <FormGroup>
                  <Input
                    type="select"
                    name="selectAddress"
                    as="selectAddress"
                    multiple
                  >
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
                  </Input>
                </FormGroup>
                <Button color="primary" block>
                  Select
                </Button>
              </Form>
            </CardBody>
          </Card>
          <Row>
            <Col>&nbsp;</Col>
            <Col>&nbsp;</Col>
          </Row>
          <Card>
            <CardTitle>Results</CardTitle>
            <CardBody>
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
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;

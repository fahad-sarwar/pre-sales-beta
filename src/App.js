import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import {
  PrivateRoute
} from "@zen/identity-lib";
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';
import './App.css';
import Home from './pages/Home';
import CheckAvailability from './pages/CheckAvailability';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="lg" color="dark">
          <NavbarBrand href="#home">Pre-Sales-Beta</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#availabilityChecker">
                  Availability Checker
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          
        <Container className="navbar-body-padding">
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={Home} />

              <PrivateRoute
                exact={true}
                path="/checkavailability"
                component={CheckAvailability}
              />

            </Switch>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
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
          <NavbarBrand href="/">Pre-Sales-Beta</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/check-availability">
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

              <Route
                exact={true}
                path="/check-availability"
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

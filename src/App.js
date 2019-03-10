import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Container } from 'reactstrap';
import './App.css';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import CheckAvailability from './pages/CheckAvailability';
import Configuration from './pages/Configuration';
import Identity from './pages/Identity';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <Container className="navbar-body-padding">
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={Home} />

              <Route
                exact={true}
                path="/check-availability"
                component={CheckAvailability}
              />

              <Route
                exact={true}
                path="/configuration"
                component={Configuration}
              />

              <Route
                exact={true}
                path="/identity"
                component={Identity}
              />

            </Switch>
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

export default App;

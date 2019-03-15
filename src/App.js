import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Login, PrivateRoute, RenewLogin, SecurityManager } from "@zen/identity-lib";
import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";
import navConfig from "./_navConfig";
import AppNavBar from "./components/AppNavBar";
import Home from "./pages/Home";
import CheckAvailability from "./pages/availability/CheckAvailability";
import Configuration from "./pages/configuration/Configuration";
import Identity from "./pages/identity/Identity";
import Unauthorised from "./pages/Unauthorised";
import Config from "./configuration/Config";

const securityProps = {
  securityConfig: {
    authority: Config.bearerTokenAuthority,
    client_id: Config.clientId,
    post_logout_redirect_uri: Config.postLogoutRedirectUrl,
    redirect_uri: Config.redirectUrl,
    scope: Config.scopes,
    silent_redirect_uri: Config.silentRedirectUrl,
    authorisation_uri: Config.authorisationUrl
  },
  navConfig: navConfig,
  handleHidden: false,
  unauthorisedComponent: Unauthorised
};

class App extends Component {
  render() {
    return (
      <SecurityManager {...securityProps}>
        <div>
          <AppNavBar />
          <Container className="navbar-body-padding">
            <BrowserRouter>
              <Switch>
                <Route exact={true} path="/" component={Home} />

                <PrivateRoute
                  exact={true}
                  path="/check-availability"
                  component={CheckAvailability}
                />

                <PrivateRoute
                  exact={true}
                  path="/configuration"
                  component={Configuration}
                />

                <PrivateRoute
                  exact={true}
                  path="/identity"
                  component={Identity}
                />

                <Route
                  exact={true}
                  path="/renewlogin"
                  name="RenewLogin"
                  component={RenewLogin}
                />

                <Route
                  exact={true}
                  path="/login"
                  name="Login"
                  component={Login}
                />

              </Switch>
            </BrowserRouter>
          </Container>
        </div>
      </SecurityManager>
    );
  }
}

export default App;

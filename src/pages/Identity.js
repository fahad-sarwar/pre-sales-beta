import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Identity extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                <h1 className="display-3">Identity</h1>
                <p className="lead">Identity credentials for logged in user.</p>
                <hr className="my-2" />
                </Jumbotron>
            </div>
        );
    }
}
  
 export default Identity;
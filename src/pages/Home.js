import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                <h1 className="display-3">Pre-Sales Beta</h1>
                <p className="lead">This is a react-redux app intended to replace our existing pre-sales-tools app.</p>
                <hr className="my-2" />
                <p>To perform a broadband availability check, click the button below:</p>
                <p className="lead">
                    <Button color="primary">Check Availability</Button>
                </p>
                </Jumbotron>
            </div>
        );
    }
}
  
 export default Home;
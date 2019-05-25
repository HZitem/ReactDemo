import React, { Component } from 'react';
import {
    Route, Link, HashRouter as Router
} from 'react-router-dom'
class ParentRouter extends Component {
    render() {
        let url = this.props.path;
        return (
            <Router>
                <div className="ParentRouter">
                    <Link to={`${url}`}>ParentRouter</Link>
                </div>
                <Link to={`${url}/kidRouter1`}>kidRouter 1</Link>
                <br />
                <Link to={`${url}/kidRouter2`}>kidRouter 2</Link>
                <Route exact path={`${url}/kidRouter1`}render={() => <h3>kidRouter 1 </h3>} />
                <Route exact path={`${url}/kidRouter2`} render={() => <h3>kidRouter 2 </h3>} />
            </Router>
        );
    }
}

export default ParentRouter;

import React, { Component } from 'react';
import {
    Route, Link, HashRouter as Router
} from 'react-router-dom'

interface State {
}
interface Props {
    path: any;
    location:{
        pathname:String
    }
}



class ParentRouter extends Component<Props, State> {
    render() {
        let pathname = this.props.location.pathname;
        console.log("pathname",pathname)
        return (
            <Router>
                <div className="ParentRouter">
                    <Link to={`${pathname}`}>ParentRouter</Link>
                </div>
                <Link to={`${pathname}/kidRouter1`}>kidRouter 1</Link>
                <br />
                <Link to={`${pathname}/kidRouter2`}>kidRouter 2</Link>
                <Route exact path={`${pathname}/kidRouter1`} render={() => <h3>kidRouter 1 </h3>} />
                <Route exact path={`${pathname}/kidRouter2`} render={() => <h3>kidRouter 2 </h3>} />
            </Router>
        );
    }
}

export default ParentRouter;

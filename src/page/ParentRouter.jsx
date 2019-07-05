import React, { Component } from 'react';
import RrivateRoute from '../PrivateRoute'
import { Link } from "react-router-dom";

class ParentRouter extends Component {
    render() {
        return (
                <div className="ParentRouter">
                    <Link to='/'>home</Link>
                    <br />
                        {
                            this.props.routes.map((route,key)=>{
                                return  (<div key={key}><Link  to={route.path}>{route.title}</Link></div>)
                            })
                        }
                    <p>嵌套路由视图</p>
                    <div>
                        {
                            this.props.routes.map((route,key)=>{
                                return  <RrivateRoute key={key} exact path={route.path} component={route.component} />
                            })
                        }
                        
                    </div>
                </div>
        );
    };
    componentDidMount(){
        // console.log(this.props.routes)
    }
}

export default ParentRouter;

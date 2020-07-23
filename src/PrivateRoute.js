import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const RrivateRoute = ({ component: Component, ...props }) => {
    return <Route render={(p) => { //p为当前路由对象
        const login = localStorage.getItem('loginState');
        if (login) {
            return (
                <Route exact path={props.path} component={Component} />
            )
        } else {
            return <Redirect to={{ pathname: '/login' }} />
        }
    }} />
}
export default RrivateRoute
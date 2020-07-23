import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import RrivateRoute from '../PrivateRoute.js'
import login from '../page/login.tsx';
import Home from '../page/home.tsx';
import LayoutPart from '../components/LayoutPart/index.tsx';
import config from './config.js'
import { connect } from 'react-redux';
import store from '../store.js';
import { initMenusAction } from '../actions/user-actions';

class Welcome extends React.Component {
  render() {
    return <h1>404</h1>;
  }
}


store.dispatch(initMenusAction('role'));
let RootRouter = (e) => (
  <HashRouter >
    <div className="App" >
      <Switch >
        <Route exact path="/login" component={login} />
        <Route exact path="/404" component={Welcome} />
        <RrivateRoute exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        {
          <LayoutPart>
            {config['menus'].map((r, i) => {
              return (
                <RrivateRoute key={i} exact path={r.key}
                  component={r.component}
                />
              )
            })}
            
          </LayoutPart>
        }
        <Route render={() => <Redirect to="/404" />} />

      </Switch>
    </div>
  </HashRouter>
)



function mapStateToProps(state) {
  return {
    menus: state.userReducer.user.menus,
    test: state.userReducer.user.test,
  }
}
RootRouter = connect(mapStateToProps)(RootRouter)
export default RootRouter;

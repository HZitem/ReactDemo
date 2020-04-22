import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import RrivateRoute from '../PrivateRoute'
import login from '../page/login';
import Home from '../page/home';
import hookDemo from '../page/hookDemo';
import config from './config'
import { connect } from 'react-redux';
import store from '../store';
import {initMenusAction} from '../actions/user-actions';

class Welcome extends React.Component {
    render() {
      return <h1>404</h1>;
    }
  }

// const userRoles =  ['/reduxPage','/ParentRouter'];
store.dispatch(initMenusAction('role'));
let RootRouter = (e) => (
<HashRouter >
    <div className="App" >
        <Switch > {
                config['menus'].map(r => {
                    if( e.menus.indexOf(r.key) !== -1){
                        const route = r => {
                            return (
                                <RrivateRoute key={r.key} exact path={r.key}
                                component={r.component}
                                />
                            )
                        }
                        return route(r) ;
                    }else{
                        return []
                    }
                    
                })
            } 
            <Route exact path="/login" component={login}/> 
            <Route exact path="/hookDemo" component={hookDemo}/> 
            <Route exact path="/404" component={Welcome}/> 
            <RrivateRoute exact path="/" component={Home}/>   
            <Route render={() => <Redirect to="/404" />} />             
        </Switch> 
    </div> 
</HashRouter>
)



function mapStateToProps(state){
    return {
        menus:state.userReducer.user.menus,
        test:state.userReducer.user.test,
    }
  }   
  RootRouter = connect(mapStateToProps)(RootRouter)      
export default RootRouter;

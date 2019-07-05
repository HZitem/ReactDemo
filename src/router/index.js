import React  from 'react';
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import RrivateRoute from '../PrivateRoute'
import login from '../page/login';
import Home from '../page/home';
import config from './config'


class Welcome extends React.Component {
    render() {
      return <h1>404</h1>;
    }
  }
const path = ['/reduxPage','/ParentRouter/','/ParentRouter/kidRouter1','/ParentRouter','/ParentRouter/kidRouter2']
  
const RootRouter = () => (
<HashRouter >
<div className="App" >
        <Switch > {
                config['menus'].map((r,key) => {
                    if( path.indexOf(r.path) !== -1){
                        const route = r => {
                            return (
                                <RrivateRoute key={key}  path={r.path}
                                    component={r.component} routes={r.routes}
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
            <Route exact path="/404" component={Welcome}/> 
            <RrivateRoute exact path="/" component={Home}/>   
            <Route render={() => <Redirect to="/404" />} />             
        </Switch> 
    </div> 
</HashRouter>
)
                        
export default RootRouter;
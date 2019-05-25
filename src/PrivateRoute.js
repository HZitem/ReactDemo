import React from 'react'
import { Route, Redirect} from 'react-router-dom'

const RrivateRoute = ({component:Component,...props})=>{
    return  <Route {...props} render={(p)=>{
        const login  = localStorage.getItem('loginState');
        if(login){
            return <Component {...props}/>
        }else{
            return <Redirect to={{pathname:'/login'}}/>
        }
    }}/>
}
export default RrivateRoute
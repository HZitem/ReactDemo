import  { Set_Menus }  from '../actions/user-actions';

const initialState = {
  user: {
      role:'',
      menus:[],
  }
}


export default function(state=initialState, action) {
  switch (action.type) {
    case Set_Menus: 
    let menus = ['/reduxPage','/ParentRouter','/hookDemo','/']; //路由菜单权限,'/reduxPage','/ParentRouter'
    state.user.menus = menus;
      return Object.assign({}, state, {
        ...state,
     })
    default:
      return state;
  }
}
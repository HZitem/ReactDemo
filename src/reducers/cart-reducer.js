import  { ADD_TO_CART,DELETE_FROM_CART,GET_AJAX_LIST}  from '../actions/cart-actions';

const initialState = {
  cart: [
    {
      name: 'mik',
    },
    {
      name: 'ubnt',    
    }
  ],
  test:[]
}


export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: 
      return Object.assign({}, state, {
          ...state,
          cart: [...state.cart, action.payload]
      })
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item,index) => index !== action.payload.index)
      }
    }
    case GET_AJAX_LIST: {
      if(action.action.data!==undefined){
        return {
          ...state,
          test: action.action.data.list
        }
      }else{
        return {
          ...state,
          test: null
        }
      }
    }
    default:
      return state;
  }
}
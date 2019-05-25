import  { ADD_TO_CART,DELETE_FROM_CART}  from '../actions/cart-actions';

const initialState = {
  cart: [
    {
      name: 'mik',
    },
    {
      name: 'ubnt',
    
    }
  ]
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

    default:
      return state;
  }
}
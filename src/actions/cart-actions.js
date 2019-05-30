import {
  TotalTemplate
} from '../api/index'

export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const GET_AJAX_LIST = 'GET_AJAX_LIST';


export const initListAction = (action) => ({
  type: GET_AJAX_LIST,
  action
})

export function addTo(data) {
  return {
    type: ADD_TO_CART,
    payload: {
      name: data
    }
  }
}

export const ajaxList = () => {
  return (dispatch) => {
    TotalTemplate().then(res => {
      let data = {data:res.data,type:true}
      const action = initListAction(data)
      dispatch(action)
    })
  }
}


export function deleteFrom(index) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      index
    }
  }
}
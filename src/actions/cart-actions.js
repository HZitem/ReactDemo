export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export function addTo(data){
    return {
        type:ADD_TO_CART,
        payload:{name:data}
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
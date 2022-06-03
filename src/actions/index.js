export const addToCart = object => ({
  type: 'ADD_TO_CART',
  payload: object,
})

export const increaseCartItem = object => ({
  type: 'INCREASE_COUNT',
  payload: object,
})

export const decreaseCartItem = object => ({
  type: 'DECREASE_COUNT',
  payload: object,
})

export const delteCartItem = object => ({
  type: 'DELETE_FROM_CART',
  payload: object,
})

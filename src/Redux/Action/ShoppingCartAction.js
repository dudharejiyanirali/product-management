import * as actionType from './actionType'
export const AddToCart = (product) => ({
  type: actionType.ADD_TO_CART,
  payload: product,
})

export const RemoveItemFromCart = (product) => ({
  type: actionType.REMOVE_ITEM_FROM_CART,
  payload: product,
})

export const addItemQty = (product) => ({
  type: actionType.ADD_ITEM_QTY,
  payload: product,
})

export const removeItemQty = (product) => ({
  type: actionType.REMOVE_ITEM_QTY,
  payload: product,
})

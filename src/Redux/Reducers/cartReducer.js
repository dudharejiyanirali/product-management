import * as actionType from '../Action/actionType'
import products from '../../product.json'

const initProducts = [...products]
const initialState = {
  products: initProducts,
  cartItems: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      let filProduct = state.products.filter(
        (item) => item.id !== action.payload.id,
      )

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        products: filProduct,
      }

    case actionType.REMOVE_ITEM_FROM_CART:
      let filData = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      )
      action.payload.product_qty = 1
      return {
        ...state,
        cartItems: filData,
        products: [...state.products, action.payload],
      }

    case actionType.ADD_ITEM_QTY:
      let addItem = []
      state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.product_qty += 1
        }
        return addItem.push(item)
      })
      return {
        ...state,
        cartItems: addItem,
      }

    case actionType.REMOVE_ITEM_QTY:
      let removeItem = []
      state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.product_qty -= 1
        }
        return removeItem.push(item)
      })
      return {
        ...state,
        cartItems: removeItem,
      }

    default:
      return state
  }
}

export default cartReducer

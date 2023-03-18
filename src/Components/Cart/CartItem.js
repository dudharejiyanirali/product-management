import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import {
  addItemQty,
  RemoveItemFromCart,
  removeItemQty,
} from '../../Redux/Action/ShoppingCartAction'
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="row" style={{ padding: '2rem', marginTop: '2rem' }}>
        <div className="col-md-3">
          <img
            className="rounded"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
            src={cartItem.images}
            alt={cartItem.product_name}
          />
        </div>
        <div className="col-md-6">
          <div className="mt-3">
            <h5 className="font-weight-bold">{cartItem.product_name}</h5>

            <div className="mt-3">
              <Button
                variant="text"
                style={{ color: 'grey' }}
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(RemoveItemFromCart(cartItem))}
              >
                REMOVE ITEM
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="input-group mt-3 mb-5">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-secondary font-weight-bold"
                disabled={cartItem.product_qty === 1}
                onClick={() => dispatch(removeItemQty(cartItem))}
              >
                {' '}
                --{' '}
              </button>
            </div>
            <input
              type="text"
              readOnly
              class="form-control text-center"
              value={cartItem.product_qty}
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary font-weight-bold"
                onClick={() => dispatch(addItemQty(cartItem))}
              >
                +
              </button>
            </div>
          </div>
          <h5 className="text-muted font-weight-bold mt-3 float-right">
            ${cartItem.price}
          </h5>
        </div>
      </div>
    </>
  )
}

export default CartItem

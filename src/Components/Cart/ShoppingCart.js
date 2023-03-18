import { Paper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
export default function ShoppingCart() {
  const CartItems = useSelector((state) => state?.cart?.cartItems)

  return (
    <Paper elevation={3}>
      <div className="row" style={{ padding: '2rem', marginTop: '2rem' }}>
        <div className="col-lg-8 col-md-12">
          <div className="custom-card">
            <h4>Cart ( {CartItems.length} Items)</h4>
            <hr className="my-3" />
            {CartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="custom-card" style={{ borderRadius: '10px' }}>
            <h5>The Total Amount </h5>
            <hr className="my-3" />
            <div className="d-flex justify-content-between">
              <p className="text-muted">Products Amount</p>
              <p className="text-muted">
                $
                {CartItems.reduce((acc, { price, product_qty }) => {
                  let qty = parseInt(product_qty)
                  let item = parseFloat(price).toFixed(2)
                  let accumulator = parseFloat(acc).toFixed(2)
                  let res = parseFloat(item) * qty + parseFloat(accumulator)
                  return parseFloat(res).toFixed(2)
                }, 0)}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-muted">Shipping</p>
              <p className="text-muted">Free</p>
            </div>
            <hr className="my-2" />
            <div className="d-flex justify-content-between align-items-center mb-4">
              <strong>
                Total Amount
              </strong>
              <strong>
                $
                {CartItems.length > 0
                  ? parseFloat(
                      CartItems.reduce((acc, { price, product_qty }) => {
                        let qty = parseInt(product_qty)
                        let item = parseFloat(price).toFixed(2)
                        let accumulator = parseFloat(acc).toFixed(2)
                        let res =
                          parseFloat(item) * qty + parseFloat(accumulator)
                        return parseFloat(res).toFixed(2)
                      }, 0),
                    )
                  : 0}
              </strong>
            </div>
            <button className="btn cart_btn btn-block py-2">
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </Paper>
  )
}

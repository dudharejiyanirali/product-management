import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Product from './../Components/Product'
import LoginForm from '../Components/LoginForm'
import ShoppingCart from '../Components/Cart/ShoppingCart'
const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<LoginForm />} />
      <Route
        path="/dashboard"
        exact
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />
      <Route
        path="shoping-cart"
        element={
          <PrivateRoute>
            <ShoppingCart />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default Router

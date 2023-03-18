import { Navigate } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import React from 'react'

function PrivateRoute({ children }) {
  const data = localStorage.getItem('user')
  const login = data && JSON.parse(data)
  const isLoggedin = login && login.isLoggedIn
  return isLoggedin && isLoggedin != null  ? <Dashboard children={children} /> : <Navigate to="/" />
}

export default PrivateRoute

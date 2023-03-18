import React from 'react'
import { Container } from '@mui/material'
import Header from './Header'
function Dashboard({ children }) {
  return (
    <>
      <Header />
      <Container sx={{ paddingLeft: 0, paddingRight: 0 }}>{children}</Container>
    </>
  )
}

export default Dashboard

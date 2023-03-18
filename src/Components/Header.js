import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const navigate = useNavigate()
  const CartNumOfItems = useSelector((state) => state?.cart?.cartItems)

  return (
    <Box sx={{ flexGrow: 1 }} className="header_top">
      <AppBar position="static" className="header_top">
        <Toolbar>
          <Link to={'/dashboard'} className="header_title">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', color: '#fff' } }}
            >
              Product Management
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/shoping-cart'}>
              <IconButton size="large" className="cart_icon">
                <Badge
                  badgeContent={
                    CartNumOfItems.length > 0 ? CartNumOfItems.length : '0'
                  }
                  color="error"
                >
                  <ShoppingCartIcon style={{ color: '#fff' }} />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              size="small"
              edge="end"
              aria-label="logout"
              aria-haspopup="true"
              color="inherit"
              onClick={() => {
                localStorage.removeItem('user')
                navigate('/')
              }}
            >
              Logout
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

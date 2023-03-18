import * as React from 'react'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../Redux/Action/ShoppingCartAction'
import { Button} from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

export default function Product() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state?.cart?.products)

  return (
    <main className="product_main">
      <Container sx={{ py: 8 }} maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {productList.length > 0 ? (
              productList.map((product, index) => (
                <Grid item xs={2} sm={4} md={4}>
                  <Paper variant="outlined" square>
                    <Card sx={{ maxWidth: 345 }}>
                      <div className="card-product ">
                        <div className="img_wrap">
                          <img src={product.images} />{' '}
                        </div>
                        <div className="info_wrap">{product.product_name}</div>
                        <div>$ {product.price}</div>
                        <div className="bottom_wrap">
                          <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            onClick={() => dispatch(AddToCart(product))}
                            className="cart_btn"
                          >
                            Add To Cart
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Paper>
                </Grid>
              ))
            ) : (
              <p style={{ textAlign: 'center', margin: 'auto' }}>
                No Product Available
              </p>
            )}
          </Grid>
        </Box>
      </Container>
    </main>
  )
}

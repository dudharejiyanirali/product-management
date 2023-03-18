import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Paper } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { loginAction } from './../Redux/Action/LoginAction'
import { useNavigate } from 'react-router-dom'
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
export const LoginValidationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid Email')
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email address',
    )
    .required('Email is Required !'),
  password: yup.string().required('password is Required !'),
})
const LoginForm = () => {
  
  const [indication, setIndication] = React.useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      if (
        values.email === 'admin@gmail.com' &&
        values.password === 'Abcd@1234'
      ) {
        const data = {
          email: values.email,
          password: values.password,
        }
        dispatch(loginAction(data))
        navigate('/dashboard')
      } else {
        alert('email & password are incorrect')
      }
    },
  })
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar className="login_icon">
            <LockOpenRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Please login to your account
          </Typography>

          <Box sx={{ mt: 1, padding: '2rem' }}>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <TextField
                margin="normal"
                type="name"
                name="email"
                id="standard-required"
                label="Email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            
              <TextField
                margin="normal"
                type="password"
                name="password"
                id="standard-required"
                label="Password"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
              />
        
              <Button
                type="submit"
                fullWidth
                className="login_button"
                disabled={!formik.isValid}
                onClick={() => setIndication(true)}
              >
                Log in
              </Button>
              {indication && formik.errors.email ? (
                <Typography className="error_text">{formik.errors.email}</Typography>
              ) : null}
              {indication && formik.errors.password ? (
                <Typography className="error_text">{formik.errors.password}</Typography>
              ) : null}
            </form>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
export default LoginForm

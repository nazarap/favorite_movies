import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { PageTitle, Link } from '../styled'

export default () =>
  <div>
    <PageTitle>Login</PageTitle>
    <TextField
      className='login-page__input'
      label="Login"
      variant="outlined"
    />
    <TextField
      className='login-page__input'
      label="Password"
      variant="outlined"
    />
    <Button
      className="login-page__button"
      variant="contained"
      color="primary"
    >Login</Button>
    <Typography
      className="login-page__registration"
      variant="h6"
    >
      or
      <Link
        to='/registration'>
        <Button
          color="primary"
        >Create new Account</Button>
      </Link>
    </Typography>
  </div>
